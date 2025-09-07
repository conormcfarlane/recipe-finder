import React, { useState } from "react";
import logo from "/images/logo.svg";
import iconHamburger from "/images/icon-hamburger-menu.svg";
import { Link } from "react-router-dom";
import MainButton from "./MainButton";

export default function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Recipes", path: "/recipes" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div>
      <section className="flex relative justify-between items-center pb-5">
        <img src={logo} className="h-8" />

        <div className="hidden lg:flex gap-10">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="py-3">
              {link.name}
            </Link>
          ))}
        </div>

        <div
          className="bg-neutral-200 w-10 h-10 flex justify-center items-center rounded-lg lg:hidden cursor-pointer"
          onClick={handleMenuToggle}
        >
          <img src={iconHamburger} alt="" />
        </div>
        <div className="hidden lg:block">
          <MainButton text="Browse Recipes" />
        </div>
      </section>
      {isMenuOpen && (
        <div className="flex flex-col w-full px-2 mb-8 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={handleMenuToggle}
              className=" py-3"
            >
              {link.name}
            </Link>
          ))}
          <div>
            <MainButton text="Browse Recipes" onClick={handleMenuToggle} />
          </div>
        </div>
      )}
    </div>
  );
}
