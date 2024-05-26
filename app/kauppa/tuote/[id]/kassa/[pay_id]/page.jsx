"use client";

import { useCallback } from 'react';
import { useParams } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Checkout() {
  const { pay_id } = useParams();

  const fetchClientSecret = useCallback(async () => {
    try {
      const res = await fetch(`/api/payment_intent?session_id=${pay_id}`, {
        method: "GET",
      });
      const data = await res.json();
      if (data.client_secret) {
        return data.client_secret;
      } else {
        throw new Error("Client secret not found");
      }
    } catch (error) {
      console.error("Error fetching client secret:", error);
      throw new Error("Failed to fetch client secret");
    }
  }, [pay_id]);

  const options = { fetchClientSecret };

  return (
    <div id="checkout" className="p-3">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
