import Link from "next/link";
import { FaInstagram, FaShoppingCart, FaTwitter } from "react-icons/fa";
import React from "react";

const navLinks = [
  { name: "About", path: "#about" },
  { name: "Category", path: "#category" },
  { name: "Shop", path: "#shop" },
  { name: "Contact", path: "#contact" },
];

const LinkStyles =
  "hidden md:flex justify-center items-center gap-3 text-[1.12rem] cursor-pointer";

const Navbar = () => {
  return (
    <nav className=" bg-black text-white p-2 px-2 md:p-3 fixed w-full top-0 left-0 z-10">
      <div className=" flex__between container">
        <div className="cursor-pointer">
          <Link href={"/"} className="font-bold md:text-2xl">
            TSWAGS <span className="md:pl-3 pl-2">STORE</span>
          </Link>
        </div>
        <ul className={`${LinkStyles}`}>
          {navLinks.map((link) => {
            return (
              <li key={link.name} className="onHover__links">
                {link.name}
              </li>
            );
          })}
        </ul>
        <div className="flex gap-3 items-center  cursor-pointer">
          <span>
            <FaShoppingCart className="onHover__links" size={24} />
          </span>
          <div className="hidden md:flex justify-center items-center gap-2 ">
            <FaInstagram className="onHover__links" size={24} />
            <FaTwitter className="onHover__links" size={24} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
