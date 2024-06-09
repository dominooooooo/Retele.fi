import { useRouter } from "next/navigation";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const ProductCard = ({ product, price }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/kauppa/${product.id}`);
  };

  return (
    <Card shadow="sm" isPressable onPress={handleNavigation} className="bg-white">
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
        <p>{(price.unit_amount / 100).toFixed(2)}€</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
