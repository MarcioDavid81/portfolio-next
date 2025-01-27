"use client"

import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/projects",
  },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`top-0 z-10 h-32 w-full flex items-center justify-center lg:fixed transition-all duration-500 ease-in-out ${scrolled && "lg:bg-secondary lg:shadow-white lg:rounded-br-[100px]"}`}>	
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image src={"/images/logo.png"} alt="logo" width={158} height={49} />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
