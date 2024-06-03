"use client";

import { useEffect, useState } from 'react';
import { usePathname } from "next/navigation";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { useProduct } from "@/contexts/ProductContext";
import Image from 'next/image'

const fetchProductById = async (id) => {
  // Implement the API call to fetch product by ID
  const response = await fetch(`/api/getProductDetails?id=${id}`);
  const data = await response.json();
  return data;
};

export default function ShopLayout({ children }) {
  const pathname = usePathname();
  const { product, setProduct } = useProduct();
  const [loading, setLoading] = useState(true);

  const pathSegments = pathname.split("/").filter((segment) => segment);
  const isProductPath =
    pathSegments.length > 1 &&
    pathSegments[1] &&
    pathSegments[1].startsWith("prod_");

  useEffect(() => {
    if (isProductPath && !product) {
      const productId = pathSegments[1];
      fetchProductById(productId).then((data) => {
        setProduct(data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [isProductPath, pathSegments, product, setProduct]);

  const isOrderPath =
    pathSegments.length > 2 &&
    pathSegments[2] &&
    pathSegments[2].startsWith("cs_");

  return (
    <section>
      {!loading && (
        <Breadcrumbs className="ml-5 mt-2">
          {(isProductPath || pathSegments.includes("tilausvahvistus")) && (
            <BreadcrumbItem href="/kauppa">Kauppa</BreadcrumbItem>
          )}

          {(isProductPath || isOrderPath || pathSegments.includes("tilausvahvistus")) && (
            <BreadcrumbItem href={`/kauppa/${pathSegments[1]}`}>
              {product ? product.name : ""}
            </BreadcrumbItem>
          )}

          {(isOrderPath || pathSegments.includes("tilausvahvistus")) && <BreadcrumbItem>Tilaus</BreadcrumbItem>}

          {pathSegments.includes("tilausvahvistus") && (
            <BreadcrumbItem>Tilausvahvistus</BreadcrumbItem>
          )}
        </Breadcrumbs>
      )}

      {children}
    </section>
  );
}
