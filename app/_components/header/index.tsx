import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";

const NAV_ITEMS = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Projetos',
      href: '/projects',
    },
  ]

const Header = () => {
    return ( <header className="absolute top-0 z-10 h-24 w-full flex items-center justify-center">
        <div className="container flex items-center justify-between">
            <Link href="/">
                <Image src={"/images/logo.svg"} alt="logo" width={58} height={49} />
            </Link>
            <nav className="flex items-center gap-4 sm:gap-10">
            {NAV_ITEMS.map((item) => (
                <NavItem {...item} key={item.label} />
            ))}
        </nav>
        </div>
    </header> );
}
 
export default Header;