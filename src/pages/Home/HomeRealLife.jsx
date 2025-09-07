import React from "react";
import imageHomeRealLifeLarge from "/images/image-home-real-life-large.webp";
import imageHomeRealLifeSmall from "/images/image-home-real-life-small.webp";

export default function () {
  return (
    <section className="flex flex-col gap-8 lg:flex-row lg:items-center">
      <div className="flex flex-col gap-6">
        <p className="font-bold text-[2.5rem]">Built for real life</p>
        <p>
          Cooking shouldn't be complicated. These recipes come in under{" "}
          <span className="font-bold bg-orange-400">30 minutes</span> of active
          time, fit busy schedules, and taste good enough to repeat
        </p>
        <p>
          Whether you're new to the kitchen or just need fresh ideas, we've got
          you covered.
        </p>
      </div>
      <picture>
        <source srcSet={imageHomeRealLifeLarge} media="(min-width:1024px)" />
        <img
          src={imageHomeRealLifeSmall}
          alt=""
          className="rounded-xl w-full"
        />
      </picture>
    </section>
  );
}
