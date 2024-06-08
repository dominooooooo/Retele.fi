import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET(req) {
  console.log("Fetching prices and products...");

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const pricesResponse = await stripe.prices.list();
    const productsResponse = await stripe.products.list({ active: true });

    const prices = pricesResponse.data;
    const products = productsResponse.data;

    console.log("Prices fetched:", prices);
    console.log("Products fetched:", products);

    const combinedData = {
      prices: prices.reverse(),
      products: products.reverse(),
    };

    const response = NextResponse.json(combinedData);
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    response.headers.set("Surrogate-Control", "no-store");

    return response;
  } catch (error) {
    console.error("Error fetching prices and products:", error);
    return NextResponse.error(
      new Error("Failed to fetch prices and products.")
    );
  }
}
