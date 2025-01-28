/* eslint-disable prettier/prettier */
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-2 w-full flex items-center justify-center bg-gray-800">
      <div className="container justify-between items-center flex gap-4 text-gray-400">
        <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">All Rights Reserved &copy; {new Date().getFullYear()}</span>
        <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
          Made with by |{" "}
          <Link href="https://www.marciodavid.com" className="hover:text-primary transition-colors">
            Marcio David - Web Developer
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
