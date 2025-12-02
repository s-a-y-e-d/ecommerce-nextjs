import { getSession } from "@/lib/utiles/auth-action";
import AuthClientPage from "./auth-client";
import "./auth-client.css"
import { redirect } from "next/navigation";

export default async function AuthPage() {
  "use server"
  const session = await getSession();
  if (session) {
    redirect('/')
  }
  return <AuthClientPage />;
}