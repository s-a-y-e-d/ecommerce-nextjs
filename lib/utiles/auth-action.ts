"use server"

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { auth } from "../auth"

export async function signUp(email: string, password: string, name: string) {
  const result = await auth.api.signUpEmail({
    body: { email, password, name, callbackURL: '/', }
  });

  // If signup created a user/session, invalidate the home page so it can
  // render the updated session/state.
  try {
    if (result && (result as any).user) {
      revalidatePath('/');
    }
  } catch (err) {
    // revalidatePath should be safe to call in a server action; swallow any
    // unexpected errors to avoid breaking the signup flow.
    console.error('revalidatePath error', err);
  }

  return result;
}

export async function signIn(email: string, password: string) {
  const result = await auth.api.signInEmail({
    body: { email, password, callbackURL: '/', }
  });
  return result;
}

export const getSession = async () => {

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
}
