import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const priceId = "2";

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1OvmsCECJemUsN9c3HvmGFNr",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/kauppa",
    shipping_address_collection: {
      allowed_countries: ["FI"],
    },
  });
  return NextResponse.json({ url: session.url });
}
