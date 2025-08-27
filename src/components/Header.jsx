import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import iconHamburger from "../assets/images/icon-hamburger-menu.svg";
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
    <section className="flex relative justify-between items-center pb-5">
      <img src={logo} className="h-8" />
      <button
        className="bg-neutral-200 p-3 cursor-pointer"
        onClick={handleMenuToggle}
      >
        <img src={iconHamburger} alt="" />
      </button>
      {isMenuOpen && (
        <div className="absolute bottom-0 translate-y-48 flex flex-col bg-red-500 w-full px-2">
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
          <Link to="/recipes">
            <MainButton text="Browse Recipes" onClick={handleMenuToggle} />
          </Link>
        </div>
      )}
    </section>
  );
}
