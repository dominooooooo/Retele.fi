import Stripe from "stripe";
import { NextResponse } from "next/server";

export const revalidate = 60;

export async function GET(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const { searchParams } = new URL(request.url);
  const productId = searchParams.get("id");

  if (!productId) {
    return NextResponse.error(new Error("Product ID is required"));
  }

  try {
    const productResponse = await stripe.products.retrieve(productId);
    const priceResponse = await stripe.prices.list({ product: productId });

    const combinedData = {
      product: productResponse,
      price: priceResponse.data[0],
    };

    return NextResponse.json(combinedData, { revalidate: 60 });
  } catch (error) {
    console.error("Error fetching product details:", error);
    return NextResponse.error(new Error("Failed to fetch product details"));
  }
}
