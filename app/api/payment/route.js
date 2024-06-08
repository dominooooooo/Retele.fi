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
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 500,
              currency: 'eur',
            },
            display_name: 'Matkahuolto',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 1,
              },
              maximum: {
                unit: 'business_day',
                value: 3,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'eur',
            },
            display_name: 'Kotiinkuljetus (huom. vain Porin alue!)',
            delivery_estimate: {
              minimum: {
                unit: 'day',
                value: 1,
              },
              maximum: {
                unit: 'day',
                value: 1,
              },
            },
          },
        },
      ],
      mode: "payment",
      shipping_address_collection: {
        allowed_countries: ['FI'], 
      },
      phone_number_collection: {
        enabled: true,
      },
      custom_text: {
        terms_of_service_acceptance: {
          message: 'Hyväksyn [Toimitusehdot](https://retele.fi/maksutavatjatoimitus)',
        },
      },
      consent_collection: {
        terms_of_service: 'required',
      },
      // invoice_creation: {
      //   enabled: true,
      //   invoice_data: {
      //     description: 'Invoice for Product X',
      //     metadata: {
      //       order: 'order-xyz',
      //     },
      //     custom_fields: [
      //       {
      //         name: 'Purchase Order',
      //         value: 'PO-XYZ',
      //       },
      //     ],
      //     rendering_options: {
      //       amount_tax_display: 'include_inclusive_tax',
      //     },
      //     footer: 'Re.',
      //   },
      // },
      preferred_locales: ['fi-FI'],
      allow_promotion_codes: true,
      return_url: `${request.headers.get('origin')}/kauppa/tilausvahvistus/{CHECKOUT_SESSION_ID}`,
      // automatic_tax: { enabled: true },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating Stripe checkout session:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
