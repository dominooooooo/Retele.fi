"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@nextui-org/react";
import { useProduct } from "@/contexts/ProductContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ProductDetail = () => {
  const { setProduct } = useProduct();
  const [product, setLocalProduct] = useState({});
  const [price, setPrice] = useState({});
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const fetchProductDetails = async () => {
        try {
          const { data } = await axios.get(`/api/getProductDetails?id=${id}`);
          setLocalProduct(data.product);
          setPrice(data.price);
          setProduct(data.product);
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      };

      fetchProductDetails();
    }
  }, [id, setProduct]);

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

  const images = Object.keys(product.metadata || {})
    .filter(key => key.startsWith("img"))
    .sort((a, b) => a.localeCompare(b)) // Ensure the images are sorted by img1, img2, etc.
    .map(key => product.metadata[key]);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center sm:items-start max-w-[1040px] mx-auto mt-12">
        <div className="w-full sm:w-1/2">
          {images.length > 0 && (
            <>
              {/* Swiper for mobile */}
              <div className="block sm:hidden">
                <Swiper
                  modules={[Pagination]}
                  pagination={{
                    clickable: true,
                  }}
                >
                  {images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <Zoom>
                        <img
                          src={img}
                          alt={`${product.name} image ${index + 1}`}
                          className="w-full object-cover cursor-pointer"
                        />
                      </Zoom>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Grid for desktop */}
              <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-2">
                {images.map((img, index) => (
                  <Zoom key={index}>
                    <img
                      src={img}
                      alt={`${product.name} image ${index + 1}`}
                      className="w-full object-cover cursor-pointer"
                    />
                  </Zoom>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="w-full sm:w-1/2 sm:pl-8 pl-12 mt-8 sm:mt-0 mb-12">
          <h1 className="font-black text-2xl">{product.name}</h1>
          <p className="my-4">{product.description}</p>
          <p className="text-xl font-bold mb-4">{price.unit_amount / 100}€</p>
          <Button size="lg" onClick={handlePurchase}>Osta</Button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
