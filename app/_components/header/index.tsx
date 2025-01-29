/* eslint-disable prettier/prettier */
"use client";

import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";
import { useEffect, useState } from "react";
import { Button } from "../button";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Certificações",
    href: "/certifications",
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
    <header
      className={`top-0  z-10 h-24 w-full flex items-center justify-center lg:sticky transition-all duration-300 ease-in-out ${
        scrolled &&
        "lg:bg-secondary shadow-sm lg:shadow-primary lg:rounded-br-[100px]"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/images/logo.png"}
            alt="Logo MD Web Developer"
            width={158}
            height={49}
          />
        </Link>
        <div className="lg:flex items-center gap-10">
          <nav className="flex items-center gap-4 sm:gap-10">
            {NAV_ITEMS.map((item) => (
              <NavItem {...item} key={item.label} />
            ))}
          </nav>
          <Link href="https://wa.link/fyvd8f" target="_blank" rel="noopener">
            <Button className="bg-transparent">Contato</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
