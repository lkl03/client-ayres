import { useState, useEffect } from "react";
import { logonav, logonavalt } from "../assets";
import Link from "next/link";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== showNavbar) {
        setShowNavbar(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [showNavbar]);

  return (
    <nav
      className={`${
        showNavbar ? "bg-[#3683DC75] text-black" : ""
      } fixed w-full top-0 left-0 z-50 flex items-center justify-between p-4 background`}
    >
      <div className="flex items-center">
        <Link href='/'>
        <img
          src={logonav.src}
          alt="Logo"
          className="md:w-[250px] w-[175px] h-auto md:ml-10"
        />
        </Link>
      </div>
      <div className="flex items-center">
        <img
          src={logonavalt.src}
          alt="Logo alternativo"
          className="md:w-[100px] w-[60px] h-auto md:mr-10"
        />
      </div>
    </nav>
  );
}

export default Navbar;