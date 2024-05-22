import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  
  try {
    const session = await stripe.checkout.sessions.retrieve("cs_test_a1afrunxRiPuJSgxgg5b0O7jyK2c8TqHJJcbs1S3iq46pbdfurg8yWvsmr");

    return NextResponse.json({ client_secret: session.client_secret });
  } catch (error) {
    console.error("Error retrieving client secret:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
