"use client";

import { usePathname } from 'next/navigation';
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { useProduct } from "@/contexts/ProductContext";

export default function ShopLayout({ children }) {
  const pathname = usePathname();
  const { product } = useProduct();

  const pathSegments = pathname.split('/').filter(segment => segment);

  return (
    <section>
      <Breadcrumbs className="ml-5 mt-2">
        {pathSegments.length > 1 && pathSegments[1].startsWith('prod_') && (
          <BreadcrumbItem href="/kauppa">Kauppa</BreadcrumbItem>
        )}

        {pathSegments.length > 1 && pathSegments[1].startsWith('prod_') && (
          <BreadcrumbItem href={`/kauppa/tuote/${pathSegments[1]}`}>
            {product ? product.name : ''}
          </BreadcrumbItem>
        )}

        {pathSegments.length > 1 && pathSegments[1].startsWith('cs_') && (
          <BreadcrumbItem>
            Tilaus
          </BreadcrumbItem>
        )}

        {pathSegments.includes('tilausvahvistus') && (
          <BreadcrumbItem>
            Tilausvahvistus
          </BreadcrumbItem>
        )}
      </Breadcrumbs>

      {children}
    </section>
  );
}
