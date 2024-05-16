"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import Image from "next/image";
import ReteleLogo from "@/public/retele.png";
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function NavbarMenu() {
  const pathname = usePathname();

  const menuItems = [
    { name: "OSTA", route: "/kauppa" },
    { name: "HUOLLA", route: "/huolla" },
    { name: "MYY", route: "/myy" },
  ];

  const isActive = (route) => pathname === route;

  return (
    <>
      <Navbar
        isBordered
        style={{ backgroundColor: "#FFFFFF" }}
        classNames={{
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:text-[#37AB07]",
            "data-[active=true]:after:h-[3px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-[#37AB07]",
          ],
        }}
      >
        <NavbarBrand className="block sm:hidden">
          <Link href="/">
            <Image
              src={ReteleLogo}
              draggable="false"
              alt="ReteleLogo"
              width={150}
              height={150}
            />
          </Link>
        </NavbarBrand>
        <NavbarContent>
          {menuItems.map((item) => (
            <NavbarItem key={item.name} isActive={isActive(item.route)}>
              <Link
                href={item.route}
                className={`font-black text-lg hover:text-[#37AB07] ${isActive(item.route) ? "text-[#37AB07]" : "text-black"}`}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <div justify="center">
          <NavbarBrand className="hidden sm:block">
            <Link href="/">
              <Image
                src={ReteleLogo}
                draggable="false"
                alt="ReteleLogo"
                width={200}
                height={200}
              />
            </Link>
          </NavbarBrand>
        </div>
        <NavbarContent className="hidden sm:flex gap-5" justify="end">
          <NavbarItem className="lg:flex">
            <Link
              href="https://www.instagram.com/retelephones/"
              isExternal
              className="text-current"
            >
              <FaInstagram size={30} />
            </Link>
          </NavbarItem>
          <NavbarItem className="lg:flex">
            <Link
              href="https://www.tiktok.com/retelephones/"
              isExternal
              className="text-current"
            >
              <FaTiktok size={30} />
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
