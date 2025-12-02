import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/utiles/auth-action";

export async function proxy(req: NextRequest) {
  const session = await getSession();
  const role = session?.user.role;
  const path = req.nextUrl.pathname;

  // ❗ If not admin & trying to access admin route → send home
  if (role !== "admin" && path.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // ❗ If admin but not already inside /admin/*
  if (role === "admin" && !path.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/"], // handles admin area & root
};
