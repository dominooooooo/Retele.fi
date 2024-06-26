import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("session_id");
  
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.status === "complete") {
      return NextResponse.json({
        client_secret: session.client_secret,
        status: session.status,
        customer_email: session.customer_details.email,
      });
    } else {
      return NextResponse.json({
        client_secret: session.client_secret,
        status: session.status,
        message: "Session is not completed yet."
      });
    }
  } catch (error) {
    console.error("Error retrieving session:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
