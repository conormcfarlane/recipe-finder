import React from "react";
import MainButton from "../../components/MainButton";
import homeHeroSmall from "../../assets/images/image-home-hero-small.webp";
import homeHeroLarge from "../../assets/images/image-home-hero-large.webp";
export default function HomeHero() {
  return (
    <section>
      <div className="flex flex-col gap-4 mb-10">
        <h1 className="text-[3.125rem] tracking-[-0.125rem]">
          Healthy meals, zero fuss{" "}
        </h1>
        <p className="text-xl">
          Discover eight quick, whole-food recipes that you can cook tonight-no
          processed junk, no guesswork.
        </p>
        <div className="w-1/2">
          <MainButton text="Start exploring" />
        </div>
      </div>
      <picture>
        <source srcset={homeHeroLarge} media="(min-width:1024px)" />
        <img
          src={homeHeroSmall}
          alt=""
          className="rounded-lg border-2 border-white"
        />
      </picture>
    </section>
  );
}
