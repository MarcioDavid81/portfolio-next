/* eslint-disable prettier/prettier */
"use client";

import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";
import { useEffect, useState } from "react";
import { Button } from "../button";
import { motion } from "framer-motion";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { set } from "date-fns";
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();

  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  useEffect(() => {
    setIsMenuMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      className={`top-0  z-10 h-24 w-full flex items-center justify-center lg:sticky transition-all duration-300 ease-in-out ${
        scrolled &&
        "lg:bg-secondary shadow-sm lg:shadow-primary lg:rounded-br-[100px]"
      }`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/images/logo.png"}
            alt="Logo MD Web Developer"
            width={100}
            height={49}
          />
        </Link>

        {isMenuMobileOpen ? <IoCloseSharp
                onClick={() => setIsMenuMobileOpen(false)}
                size={40}
                className="text-primary cursor-pointer hidden max-md:block"
              />: <IoMenu
              size={40}
              className="text-primary cursor-pointer hidden max-md:block"
              onClick={() => setIsMenuMobileOpen(true)}
            />}

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-4 sm:gap-10">
            {NAV_ITEMS.map((item) => (
              <NavItem {...item} key={item.label} />
            ))}
          </nav>
          <Link href="https://wa.link/fyvd8f" target="_blank" rel="noopener">
            <Button className="bg-transparent text-md">Contato</Button>
          </Link>
        </nav>

        {/* MENU MOBILE */}
        <motion.nav
          className="fixed right-0 top-[96px] z-10 hidden h-screen w-[70%] bg-secondary px-8 py-4 data-[open=false]:translate-x-full max-md:block"
          data-open={isMenuMobileOpen}
          onClick={() => setIsMenuMobileOpen(false)}
          initial={{ x: "100%" }}
          animate={{ x: isMenuMobileOpen ? 0 : "100%" }}
          transition={{ duration: 0.5 }}

        >
          <div>
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="mt-5 py-4">
                <NavItem {...item}  />
              </div>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
