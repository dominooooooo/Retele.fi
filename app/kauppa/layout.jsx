"use client";

import { usePathname } from 'next/navigation';
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function ShopLayout({ children }) {
  const pathname = usePathname();

  return (
    <section>
      <Breadcrumbs className="ml-5 mt-2">
        {pathname.includes("tuote") && (
          <BreadcrumbItem href="/kauppa">Kauppa</BreadcrumbItem>
        )}
        {pathname.includes("tuote") && (
          <BreadcrumbItem href={`/kauppa/tuote/`}>
            testi
          </BreadcrumbItem>
        )}
        {pathname.includes("kassa") && (
          <BreadcrumbItem href={`/kauppa/tuote/`}>
            Tilaus
          </BreadcrumbItem>
        )}
      </Breadcrumbs>

      {children}
    </section>
  );
}