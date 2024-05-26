"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import axios from "axios";
import { Divider, Link } from "@nextui-org/react";
import Image from "next/image";
import AskForPhone from "@/components/AskForPhone"

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [prices, setPrices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProductsAndPrices();
  }, []);

  const fetchProductsAndPrices = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("/api/getProducts");
      setProducts(data.products);
      setPrices(data.prices);
    } catch (error) {
      console.error("Error fetching products and prices:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="font-black text-2xl text-center mt-12">KAUPPA</div>
      <p className="text-center mt-2">Käteismaksu ja puhelin vaihdossa onnistuu. <Link href="/maksutavatjatoimitus" className="cursor-pointer">Lue lisää.</Link></p>
      {isLoading ? (
        <div className="flex justify-center items-center mt-8">
          <Image unoptimized src="/loading.gif" alt="Loading" width={160} height={160} />
        </div>
      ) : (
        <div className="px-3 sm:px-0 grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-5 max-w-[1040px] items-center mx-auto mt-8">
          {products.map((product) => {
            const productPrice = prices.find(
              (price) => price.product === product.id
            );
            return (
              <ProductCard
                key={product.id}
                product={product}
                price={productPrice}
              />
            );
          })}
        </div>
      )}
      <div className="flex justify-center items-center my-12 mx-auto max-w-xs">
        <Divider orientation="horizontal" className="w-full" />
      </div>
      <AskForPhone />
    </>
  );
}
