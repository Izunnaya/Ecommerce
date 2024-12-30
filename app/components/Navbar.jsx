import Link from "next/link";
import { FaInstagram, FaShoppingCart, FaTwitter } from "react-icons/fa";
import React from "react";

const navLinks = [
  { name: "About", path: "#about" },
  { name: "Category", path: "#category" },
  { name: "Shop", path: "#shop" },
  { name: "Contact", path: "#contact" },
];

const Navbar = () => {
  return (
    <nav className=" bg-black p-2 px-2 md:p-3 sticky w-full top-0 left-0 z-10">
      <div className=" flex__between w-full md:max-w-[1024px] lg:max-w-[1320px] mx-auto">
        <div className="cursor-pointer">
          <Link href={"/"} className="font-bold md:text-2xl">
            TSWAGS STORE
          </Link>
        </div>
        <ul className="hidden md:flex justify-center items-center gap-3 text-[1.12rem] cursor-pointer">
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
