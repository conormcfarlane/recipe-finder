import React from "react";
import logo from "../assets/images/logo.svg";
import iconHamburger from "../assets/images/icon-hamburger-menu.svg";

export default function Header() {
  return (
    <section className="flex justify-between items-center">
      <img src={logo} className="h-8" />
      <button className="bg-neutral-200 p-3" >
        <img src={iconHamburger} alt="" />
      </button>
    </section>
  );
}
