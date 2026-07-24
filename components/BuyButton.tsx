"use client";

import { useState } from "react";

export default function BuyButton({
  price,
  label = "Buy",
  productName,
  slug,
}: {
  price: number;
  label?: string;
  /** exact name shown on the Stripe checkout page */
  productName: string;
  /** used to build the "cancel and go back" URL */
  slug?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleClick() {
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName,
          priceInCents: Math.round(price * 100),
          slug,
        }),
      });
      const data = await res.json();

      if (!res.ok || !data.url) {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      window.location.href = data.url;
    } catch {
      setErrorMessage("Something went wrong. Please check your connection and try again.");
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={loading}
        className="w-full rounded-book bg-sage-deep px-7 py-3 font-display text-sm uppercase tracking-wide text-parchment shadow-card transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {loading ? "Redirecting to checkout..." : `${label} — $${price.toFixed(2)}`}
      </button>
      {errorMessage && (
        <p className="mt-3 text-center text-sm text-red-700">{errorMessage}</p>
      )}
    </div>
  );
}
