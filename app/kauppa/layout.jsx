"use client";

import { usePathname } from 'next/navigation';
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { useProduct } from "@/contexts/ProductContext";

export default function ShopLayout({ children }) {
  const pathname = usePathname();
  const { product } = useProduct();

  return (
    <section>
      <Breadcrumbs className="ml-5 mt-2">
        {(pathname.includes("tuote") || pathname.includes("tilausvahvistus")) && (
          <BreadcrumbItem href="/kauppa">Kauppa</BreadcrumbItem>
        )}
        {(pathname.includes("tuote") && product) && (
          <BreadcrumbItem href={`/kauppa/tuote/${product.id}`}>
            {product.name}
          </BreadcrumbItem>
        )}
        {(pathname.includes("kassa") || pathname.includes("tilausvahvistus")) && (
          <BreadcrumbItem>
            Tilaus
          </BreadcrumbItem>
        )}
        {pathname.includes("tilausvahvistus") && (
          <BreadcrumbItem>
            Tilausvahvistus
          </BreadcrumbItem>
        )}
      </Breadcrumbs>

      {children}
    </section>
  );
}
