import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { priceId } = await request.json();

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      return_url: `${request.headers.get('origin')}/kassa/{CHECKOUT_SESSION_ID}`,
      automatic_tax: { enabled: true },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating Stripe checkout session:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
