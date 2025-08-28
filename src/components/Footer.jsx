import React from "react";
import iconBlueSky from "../assets/images/icon-bluesky.svg";
import iconInstagram from "../assets/images/icon-instagram.svg";
import iconTiktok from "../assets/images/icon-tiktok.svg";

export default function Footer() {
  return (
    <section className="flex flex-col items-center pt-8 gap-6 md:flex-row-reverse md:justify-between">
      <div className="flex gap-6">
        <img src={iconBlueSky} alt="Blue Sky " />
        <img src={iconInstagram} alt="Instagram" />
        <img src={iconTiktok} alt="TikTok" />
      </div>
      <p>Made with {"<3"} and avacado </p>
    </section>
  );
}
