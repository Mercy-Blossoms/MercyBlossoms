import { NextResponse } from "next/server";
import Stripe from "stripe";

/**
 * Creates a real Stripe Checkout session for a one-time physical
 * product purchase (currently just God's Favorite Tree). The secret
 * key lives only in server-side env vars (STRIPE_SECRET_KEY) — it is
 * never sent to the browser.
 *
 * Uses dynamic pricing (price specified inline) rather than requiring
 * a pre-created Stripe Product/Price — simpler to stand up today. If
 * you later want the book listed as a formal Product in your Stripe
 * dashboard for reporting, swap the `price_data` block for a `price:`
 * field referencing that Product's Price ID instead.
 *
 * Required env var: STRIPE_SECRET_KEY (from Stripe Dashboard →
 * Developers → API keys → Secret key).
 */

function getBaseUrl(request: Request) {
  // Falls back to the request's own origin so this works in dev and
  // prod without needing a separate "site URL" env var.
  return new URL(request.url).origin;
}

export async function POST(request: Request) {
  let body: { productName?: string; priceInCents?: number; slug?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { productName, priceInCents, slug } = body;

  if (!productName || !priceInCents || priceInCents <= 0) {
    return NextResponse.json({ error: "Missing product details." }, { status: 400 });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    console.error("STRIPE_SECRET_KEY is not set in the environment.");
    return NextResponse.json(
      { error: "Checkout isn't connected yet. (Missing STRIPE_SECRET_KEY.)" },
      { status: 503 }
    );
  }

  const stripe = new Stripe(secretKey);
  const baseUrl = getBaseUrl(request);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: productName },
            unit_amount: priceInCents,
          },
          quantity: 1,
        },
      ],
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      success_url: `${baseUrl}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/shop${slug ? `/${slug}` : ""}`,
      // Managed Payments (Stripe's newer "we act as merchant of record"
      // product) is on by default on some accounts and conflicts with
      // shipping_address_collection. We're handling our own tax/dispute
      // situation directly, so it's turned off for this session.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...({ managed_payments: { enabled: false } } as any),
    });

    if (!session.url) {
      return NextResponse.json({ error: "Could not start checkout." }, { status: 502 });
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout session creation failed:", err);
    return NextResponse.json(
      { error: "Something went wrong starting checkout. Please try again." },
      { status: 502 }
    );
  }
}
