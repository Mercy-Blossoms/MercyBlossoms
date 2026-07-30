import { NextResponse } from "next/server";

const KIT_FORM_ID = process.env.KIT_FORM_ID || "9738679";

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
    console.error("KIT_API_KEY is not set in the environment.");
    return NextResponse.json(
      { error: "Email signup isn't connected yet. (Missing KIT_API_KEY.)" },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ api_key: apiKey, email }),
      }
    );

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      console.error("Kit API error:", res.status, JSON.stringify(data));
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