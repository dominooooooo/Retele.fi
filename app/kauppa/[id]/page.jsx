"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Skeleton,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useProduct } from "@/contexts/ProductContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { BiMemoryCard } from "react-icons/bi";
import { IoBatteryFull } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";

const ProductDetail = () => {
  const { setProduct } = useProduct();
  const [product, setLocalProduct] = useState({});
  const [price, setPrice] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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
        } finally {
          setIsLoading(false); // Set loading to false after data is fetched
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
      router.push(`/kauppa/${id}/${data.sessionId}`);
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  const images = Object.keys(product.metadata || {})
    .filter((key) => key.startsWith("img"))
    .sort((a, b) => a.localeCompare(b)) // Ensure the images are sorted by img1, img2, etc.
    .map((key) => product.metadata[key]);

  const getIconForFeature = (index) => {
    switch (index) {
      case 0:
        return <BiMemoryCard className="mr-2" />;
      case 1:
        return <IoBatteryFull className="mr-2" />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center sm:items-start max-w-[1040px] mx-auto mt-12">
        <div className="w-full sm:w-1/2">
          {isLoading ? (
            <Skeleton className="w-full h-96 rounded-2xl" />
          ) : (
            images.length > 0 && (
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
            )
          )}
        </div>
        <div className="w-full sm:w-1/2 sm:pl-8 pl-12 mt-8 sm:mt-0 mb-12">
          {isLoading ? (
            <>
              <Skeleton className="w-3/4 h-10 rounded-2xl" />
              <Skeleton className="w-full h-20 rounded-2xl my-4" />
              <Skeleton className="w-1/4 h-10 rounded-2xl mb-4" />
              <Skeleton className="w-32 h-12 rounded-2xl" />
            </>
          ) : (
            <>
              <h1 className="font-black text-2xl">{product.name}</h1>
              <p className="my-4">{product.description}</p>
              <div className="flex flex-row items-center">
                <p>Tekniset tiedot:</p>
                <Popover placement="right">
                  <PopoverTrigger>
                    <Button isIconOnly variant="light" size="sm">
                      <CiCircleInfo size={20} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <div className="text-sm flex items-center mb-1">
                        <BiMemoryCard className="mr-2" /> muistikapasiteetti
                      </div>
                      <div className="text-sm flex items-center">
                        <IoBatteryFull className="mr-2" /> akun kunto
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="mb-5">
                {product.marketing_features?.map((feature, index) => (
                  <p key={index} className="flex items-center">
                    {getIconForFeature(index)}
                    {feature.name}
                  </p>
                ))}
              </div>
              <p className="text-xl font-bold mb-4">
                {price.unit_amount / 100}€
              </p>
              <Button size="lg" onClick={handlePurchase}>
                Osta
              </Button>
              <p className="mt-3 mb-10">
                Jäikö jokin mietityttämään?{" "}
                <Link href="https://fi.trustpilot.com/review/retele.fi">
                  Kysy lisää
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
