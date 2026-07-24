import { NextResponse } from "next/server";

/**
 * Adds an email to the Mercy Blossoms Kit form. The Kit API key lives
 * only in server-side env vars (KIT_API_KEY) — it is never sent to
 * the browser. This route is what every EmailGateDownload and the
 * NewsletterSignup form actually call.
 *
 * Required env vars (set in .env.local, never committed):
 *   KIT_API_KEY   — your v4 API key from Kit → Settings → Developer → V4 Keys
 *   KIT_FORM_ID   — defaults to 9714605 ("Mercy Blossoms — Free PDF Signup")
 *                   if not set, but can be overridden per-environment.
 */

const KIT_FORM_ID = process.env.KIT_FORM_ID || "9714605";

function isValidEmail(email: unknown): email is string {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: { email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { email } = body;

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) {
    // No key configured yet — fail clearly instead of pretending it worked.
    console.error("KIT_API_KEY is not set in the environment.");
    return NextResponse.json(
      { error: "Email signup isn't connected yet. (Missing KIT_API_KEY.)" },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(`https://api.kit.com/v4/forms/${KIT_FORM_ID}/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": apiKey,
      },
      body: JSON.stringify({ email_address: email }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Kit API error:", res.status, detail);
      return NextResponse.json(
        { error: "Something went wrong signing you up. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Kit API request failed:", err);
    return NextResponse.json(
      { error: "Something went wrong signing you up. Please try again." },
      { status: 502 }
    );
  }
}
