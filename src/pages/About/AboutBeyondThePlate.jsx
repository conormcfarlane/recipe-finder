import React from "react";
import ImageBeyondThePlateLarge from "/images/image-about-beyond-the-plate-large.webp";
import ImageBeyondThePlateSmall from "/images/image-about-beyond-the-plate-small.webp";

export default function AboutBeyondThePlate() {
  return (
    <section className="flex flex-col gap-8 lg:flex-row">
      <div className="lg:w-2/5">
        <p className="text-4xl md:text-5xl lg:mb-5">Beyond the plate</p>
        <p className="lg:mb-3">
          We believe food is a catalyst for community and well-being. By sharing
          approachable recipes, we hope to:
        </p>
        <ul className="list-disc list-outside pl-4">
          <li>Encourage family dinners and social cooking</li>
          <li>Reduce reliance on single-use packaging and delivery waste.</li>
          <li>Spark curiosity about seasonal produce and local agriculture</li>
        </ul>
      </div>

      <picture className="flex-1">
        <source srcSet={ImageBeyondThePlateLarge} media="(min-width:1024px)" />
        <img
          src={ImageBeyondThePlateSmall}
          alt=""
          className="rounded-lg w-full"
        />
      </picture>
    </section>
  );
}
