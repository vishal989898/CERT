// src/components/Navbar/NavbarCom.jsx
import React, { useState } from "react";
import Logo from "../../Assets/certLogo.png";
import { Link } from "react-router-dom";
import NavLinks from "./Navlink";
import Navww from "./Navww";


const NavbarCom = () => {
  const [open, setOpen] = useState(false);

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="bg-[#114272]">
      <div className="h-25 flex items-center font-medium justify-around cursor-pointer text-white">
        {/* Logo + hamburger */}
        <div className="z-50 p-5 md:w-auto w-full justify-between flex">
          <img src={Logo} alt="CERT Logo" className="" />

          <div
            className="text-3xl md:hidden mt-5 "
            onClick={() => setOpen((prev) => !prev)}
          >
            <ion-icon  name={open ? "close" : "menu"}></ion-icon>
          </div>
        </div>

        {/* Desktop menu */}
        <ul className="md:flex hidden uppercase items-center gap-3 font-[Poppins]">
          <li>
            <Link to="/" className="inline-block py-7 px-3">
              home
            </Link>
          </li>
        
          <Navww isMobile={false} />
        </ul>

        {/* Mobile menu */}
        <ul
          className={`md:hidden absolute w-full h-full bg-[#114272] bottom-0 py-24 pl-4 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <Link
              to="/"
              className="inline-block py-3 mb-2"
              onClick={closeMobileMenu}
            >
              home
            </Link>
          </li>

          <Navww isMobile={true} closeMobileMenu={closeMobileMenu} />
        </ul>
      </div>
    </nav>
  );
};

export default NavbarCom;
