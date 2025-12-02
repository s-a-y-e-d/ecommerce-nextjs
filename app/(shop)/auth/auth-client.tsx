"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, signUp, signInSocial } from "@/lib/utiles/auth-action";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2, Github, Mail } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import "./auth-client.css";
import toast from "react-hot-toast";

// Validation Schemas
const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  name: z.string().optional(),
});

const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  adminKey: z.string().optional(),
});

const signUpAdminSchema = signUpSchema.extend({
  adminKey: z.string().min(1, "Admin key is required"),
});

type AuthFormData = z.infer<typeof signInSchema> & {
  name?: string;
  adminKey?: string;
};

export default function AuthClientPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    clearErrors,
  } = useForm<AuthFormData>({
    resolver: zodResolver(
      isSignIn ? signInSchema : isAdmin ? signUpAdminSchema : signUpSchema
    ),
    mode: "onBlur",
  });

  const toggleMode = () => {
    setIsSignIn(!isSignIn);
    clearErrors();
    reset();
  };

  const handleSocialAuth = async (provider: "google" | "github") => {
    try {
      await signInSocial(provider);
    } catch (err) {
      toast.error(
        `Authentication error`
      );
    }
  };

  const onSubmit = async (data: AuthFormData) => {
    try {
      if (isSignIn) {
        const result = await signIn(data.email, data.password);
        if (!result?.user) {
          toast.error("Invalid email or password");
        } else {
          toast.success("Signed in successfully");
          try {
            router.refresh();
          } catch (e) {
            // ignore
          }
        }
      } else {
        //let result
        //if (isAdmin) {
        //  result = await signUp(data.email, data.password, data.name!, data.adminKey);
        //} else {
        //  result = await signUp(data.email, data.password, data.name!);
        //}

        const result = isAdmin
          ? await signUp(data.email, data.password, data.name!, data.adminKey)
          : await signUp(data.email, data.password, data.name!);

        if (!result?.user) {
          toast.error("Failed to create account");
        } else {
          toast.success("Account created successfully");
          try { router.refresh(); } catch (e) { }
        }
      }
    } catch (err) {
      toast.error(
        `Authentication error`
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-form-container">
          <div className="auth-header">
            <h1 className="auth-title">
              {isSignIn ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="auth-subtitle">
              {isSignIn
                ? "Sign in to your account to continue"
                : "Sign up to get started with better-auth"}
            </p>
          </div>



          {/* Social Authentication */}
          <div className="social-auth-container">
            <button
              type="button"
              onClick={() => handleSocialAuth("google")}
              disabled={isSubmitting}
              className="social-btn social-btn-google"
            >
              {/* Google Icon - keeping SVG as it's specific */}
              <svg className="social-icon" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            <button
              type="button"
              onClick={() => handleSocialAuth("github")}
              disabled={isSubmitting}
              className="social-btn social-btn-github"
            >
              <Github className="social-icon" />
              Continue with GitHub
            </button>
          </div>

          <div className="divider">
            <div className="divider-line-container">
              <div className="divider-line" />
            </div>
            <div className="divider-text-container">
              <span className="divider-text">Or continue with</span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
            {!isSignIn && (
              <div>
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    className={clsx(
                      "form-input",
                      errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500"
                    )}
                    placeholder="Enter your full name"
                    {...register("name")}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>
            )}

            <div>
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className={clsx(
                    "form-input",
                    errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500"
                  )}
                  placeholder="Enter your email"
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  autoComplete={isSignIn ? "current-password" : "new-password"}
                  className={clsx(
                    "form-input",
                    errors.password && "border-red-500 focus:border-red-500 focus:ring-red-500"
                  )}
                  placeholder="Enter your password"
                  {...register("password")}
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            {!isSignIn && (
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="checkbox"
                    id="isAdmin"
                    checked={isAdmin}
                    onChange={(e) => setIsAdmin(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="isAdmin" className="text-sm text-gray-700">
                    I am an Admin
                  </label>
                </div>

                {isAdmin && (
                  <div>
                    <label htmlFor="adminKey" className="form-label">
                      Admin Key
                    </label>
                    <div className="relative">
                      <input
                        id="adminKey"
                        type="text"
                        className={clsx(
                          "form-input",
                          errors.adminKey && "border-red-500 focus:border-red-500 focus:ring-red-500"
                        )}
                        placeholder="Enter Admin Key"
                        {...register("adminKey")}
                      />
                    </div>
                    {errors.adminKey && (
                      <p className="mt-1 text-sm text-red-600">{errors.adminKey.message}</p>
                    )}
                  </div>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-btn mt-4"
            >
              {isSubmitting ? (
                <div className="spinner-container">
                  <Loader2 className="spinner animate-spin" />
                  {isSignIn ? "Signing in..." : "Creating account..."}
                </div>
              ) : isSignIn ? (
                "Sign In"
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Toggle between Sign In and Sign Up */}
          <div className="toggle-container">
            <button
              type="button"
              onClick={toggleMode}
              className="toggle-btn"
            >
              {isSignIn
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
