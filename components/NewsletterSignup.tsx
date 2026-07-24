"use client";

import { useState } from "react";

export default function NewsletterSignup({
  heading = "Stay Connected with Mercy Blossoms",
  body = "Join the Mercy Blossoms email list for updates as new collections are finished, new resources are added, and the story keeps growing.",
}: {
  heading?: string;
  body?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please check your connection and try again.");
    }
  }

  return (
    <div className="mx-auto max-w-md rounded-book border border-gold-light/50 bg-white/70 p-8 text-center shadow-card">
      <p className="font-display text-xs uppercase tracking-[0.3em] text-blossom-deep">
        Newsletter
      </p>
      <h2 className="mt-2 font-display text-2xl text-indigo">{heading}</h2>
      <p className="mt-2 text-sm text-ink/70">{body}</p>

      {status === "success" ? (
        <div className="mt-5">
          <p className="text-sm text-indigo/90">
            Welcome to Mercy Blossoms! You're on the list.
          </p>
        </div>
      ) : (
        <form onSubmit={submit} className="mt-5 flex flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 rounded-book border border-indigo/30 bg-white px-4 py-2 text-sm text-ink placeholder:text-ink/40 focus:border-blossom-deep focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-book bg-sage-deep px-6 py-2 font-display text-sm uppercase tracking-wide text-parchment transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {status === "loading" ? "Joining..." : "Join the List"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="mt-3 text-xs text-red-700">{errorMessage}</p>
      )}
    </div>
  );
}
