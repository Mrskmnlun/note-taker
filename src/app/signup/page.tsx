"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName,
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      router.push("/app");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--canvas)] px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-[var(--ink-primary)]">Create an account</h1>
          <p className="text-sm text-[var(--ink-secondary)]">
            Start capturing your thoughts today
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 text-sm text-[var(--danger)] bg-red-50 border border-red-100 rounded-md">
              {error}
            </div>
          )}
          <div className="space-y-2">
            <label htmlFor="displayName" className="text-sm font-medium text-[var(--ink-primary)]">
              Display Name
            </label>
            <input
              id="displayName"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Your name"
              required
              className="w-full px-3 py-2.5 bg-[var(--canvas)] border border-[var(--border)] rounded-md text-sm text-[var(--ink-primary)] placeholder-[var(--ink-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-shadow"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-[var(--ink-primary)]">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-3 py-2.5 bg-[var(--canvas)] border border-[var(--border)] rounded-md text-sm text-[var(--ink-primary)] placeholder-[var(--ink-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-shadow"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-[var(--ink-primary)]">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min. 6 characters"
              required
              minLength={6}
              className="w-full px-3 py-2.5 bg-[var(--canvas)] border border-[var(--border)] rounded-md text-sm text-[var(--ink-primary)] placeholder-[var(--ink-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-shadow"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 text-sm font-medium text-[var(--canvas)] bg-[var(--ink-primary)] rounded-md hover:bg-[#333] transition-colors disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-[var(--ink-secondary)]">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-[var(--ink-primary)] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}