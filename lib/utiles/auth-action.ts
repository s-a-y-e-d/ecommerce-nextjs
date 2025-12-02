"use server"

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { auth } from "../auth"
import { redirect } from "next/navigation";
import prisma from "../prisma";

export async function signUp(
  email: string,
  password: string,
  name: string,
  adminKey?: string
) {
  try {
    const isAdmin = adminKey && adminKey === process.env.ADMIN_KEY;

    if (adminKey && !isAdmin) {
      throw new Error("Invalid admin access key");
    }

    // 1️⃣ Create user normally (role cannot be passed here)
    const result = await auth.api.signUpEmail({
      body: { email, password, name }
    });

    // 2️⃣ Assign admin role if adminKey is correct
    if (isAdmin && result?.user) {
      await prisma.user.update({
        where: { id: result.user.id },
        data: { role: "admin" }
      });
    }


    try {
      if (isAdmin) {
        revalidatePath("/admin");
      } else {
        revalidatePath("/");        // Normal signup
      }
    } catch (err) {
      console.error("revalidatePath error:", err);
    }

    return result;
  } catch (error: any) {
    throw new Error(error?.message || "Sign up failed");
  }
}



export async function signIn(email: string, password: string) {
  try {
    const result = await auth.api.signInEmail({
      body: { email, password, callbackURL: '/', }
    });

    return result;
  } catch (error: any) {
    throw new Error(error?.body?.message || "Login failed")
  }
}

export async function signInSocial(provider: 'github' | 'google') {
  let redirectUrl = null;
  try {
    const { url } = await auth.api.signInSocial({
      body: {
        provider,
        callbackURL: '/',
      }
    });
    redirectUrl = url;
  } catch (error: any) {
    throw new Error(error?.body?.message || "Login failed")
  }

  if (redirectUrl) {
    redirect(redirectUrl);
  }
}

export const getSession = async () => {

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
}
