// components/ProductDetail.js
"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Image, Button } from "@nextui-org/react";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [price, setPrice] = useState({});

  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const fetchProductDetails = async () => {
        try {
          const { data } = await axios.get(`/api/getProductDetails?id=${id}`);
          setProduct(data.product);
          setPrice(data.price);
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      };

      fetchProductDetails();
    }
  }, [id]);

  const handlePurchase = async () => {
    try {
      const { data } = await axios.post("/api/payment", {
        priceId: price.id,
      });
      router.push(`/kauppa/tuote/${id}/kassa/${data.sessionId}`);
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center sm:items-start max-w-[1040px] mx-auto mt-12">
        <div className="w-full sm:w-1/2">
          {Array.isArray(product.metadata?.images) && product.metadata.images.length > 0 ? (
            product.metadata.images.map((image, index) => (
              <Image
                key={index}
                shadow="sm"
                radius="lg"
                width="100%"
                alt={`${product.name} image ${index + 1}`}
                className="w-full object-cover mb-4"
                src={image}
              />
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
        <div className="w-full sm:w-1/2 sm:pl-8 mt-8 sm:mt-0">
          <h1 className="font-black text-2xl">{product.name}</h1>
          <p className="my-4">{product.description}</p>
          <p className="text-xl font-bold mb-4">{price.unit_amount / 100}€</p>
          <Button onClick={handlePurchase}>Osta</Button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
