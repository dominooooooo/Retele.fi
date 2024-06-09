import Stripe from "stripe";
import { NextResponse } from "next/server";

export const revalidate = 10;

export async function GET(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const pricesResponse = await stripe.prices.list({ active: true });
    const productsResponse = await stripe.products.list({ active: true });

    const prices = pricesResponse.data;
    const products = productsResponse.data;

    const combinedData = {
      prices: prices.reverse(),
      products: products.reverse(),
    };

    return NextResponse.json(combinedData, { revalidate: 10 });
  } catch (error) {
    console.error("Error fetching prices and products:", error);
    return NextResponse.error(
      new Error("Failed to fetch prices and products.")
    );
  }
}
