import Stripe from "stripe";
import { NextResponse } from "next/server";

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

    // Set cache-control header to ensure no caching
    const response = NextResponse.json(combinedData);
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    response.headers.set('Surrogate-Control', 'no-store');

    return response;
  } catch (error) {
    console.error("Error fetching prices and products:", error);
    return NextResponse.error(
      new Error("Failed to fetch prices and products.")
    );
  }
}
