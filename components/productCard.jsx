import axios from "axios";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Stripe from "stripe";

const PricingCard = ({ product, price }) => {
  const handleSubscription = async (e) => {
    try {
      const response = await axios.post("/api/payment", {
        productId: product.id,
      });
      const { sessionId } = response.data;

      const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
      const { error } = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });

      if (error) {
        console.error("Error redirecting to checkout:", error);
      }
    } catch (error) {
      console.error("Error initiating subscription:", error);
    }
  };

  return (
    <Card shadow="sm" isPressable onPress={() => handleSubscription(product)} className="bg-white">
      <CardBody>
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={product.name}
          className="w-full object-cover h-[140px]"
          src={product.images}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{product.name}</b>
        <p>{price.unit_amount / 100}€</p>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
