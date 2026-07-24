"use client";

import { useState, useEffect } from "react";

const REMEMBER_KEY = "mb_subscribed";

/**
 * Every download on the site — one page, one category, or the whole
 * collection — goes through this. There's no payment; the "checkout"
 * is an email address. Submitting here really does add the email to
 * your Kit list via /api/subscribe before the file downloads.
 *
 * After a successful submission, this browser is remembered (via
 * localStorage) so future downloads skip straight to the file with
 * no popup. This is per-browser, not account-based — clearing
 * browser data or switching devices will ask again, which is
 * expected and fine.
 */
export default function EmailGateDownload({
  href,
  label,
  filename,
  className = "",
}: {
  href: string;
  label: string;
  filename?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "unlocked" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [remembered, setRemembered] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem(REMEMBER_KEY) === "true") {
      setRemembered(true);
    }
  }, []);

  function triggerDownload() {
    const a = document.createElement("a");
    a.href = href;
    if (filename) a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function handleButtonClick() {
    if (remembered) {
      triggerDownload();
      return;
    }
    setOpen(true);
  }

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

      localStorage.setItem(REMEMBER_KEY, "true");
      setStatus("unlocked");
      triggerDownload();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please check your connection and try again.");
    }
  }

  if (!open) {
    return (
      <button
        onClick={handleButtonClick}
        className={
          className ||
          "rounded-book bg-sage-deep px-5 py-2 font-display text-xs uppercase tracking-wide text-parchment transition-transform hover:-translate-y-0.5"
        }
      >
        {label}
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-sm rounded-book bg-parchment p-6 shadow-card"
        onClick={(e) => e.stopPropagation()}
      >
        {status === "unlocked" ? (
          <div className="text-center">
            <p className="font-display text-lg text-indigo">Your download has started</p>
            <p className="mt-2 text-sm text-ink/70">
              If it didn't open automatically,{" "}
              <a href={href} download={filename} className="text-sage-deep underline">
                click here
              </a>
              . Future downloads won't ask for your email again on this device.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="mt-5 rounded-book border border-indigo/30 px-4 py-2 font-display text-xs uppercase tracking-wide text-indigo hover:bg-indigo/5"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <p className="font-display text-lg text-indigo">{label}</p>
            <p className="mt-2 text-sm text-ink/70">
              Enter your email and this page unlocks instantly. You'll only
              need to do this once on this device.
            </p>
            <label htmlFor="gate-email" className="sr-only">
              Email address
            </label>
            <input
              id="gate-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="mt-4 w-full rounded-book border border-indigo/30 bg-white px-4 py-2 text-sm text-ink placeholder:text-ink/40 focus:border-sage-deep focus:outline-none"
            />
            {status === "error" && (
              <p className="mt-2 text-xs text-red-700">{errorMessage}</p>
            )}
            <div className="mt-4 flex gap-3">
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex-1 rounded-book bg-sage-deep px-4 py-2 font-display text-xs uppercase tracking-wide text-parchment disabled:opacity-60"
              >
                {status === "loading" ? "Unlocking..." : "Unlock Download"}
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-book border border-indigo/30 px-4 py-2 font-display text-xs uppercase tracking-wide text-indigo hover:bg-indigo/5"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
