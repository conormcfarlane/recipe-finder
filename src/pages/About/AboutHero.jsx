import React from "react";
import imageAboutOurMissionSmall from "../../assets/images/image-about-our-mission-small.webp";
import imageAboutOurMissionLarge from "../../assets/images/image-about-our-mission-large.webp";

export default function AboutHero() {
  return (
    <section className="flex flex-col gap-6 lg:flex-row lg:gap-12">
      <div className="lg:w-1/2 flex flex-col gap-4">
        <p className="text-xl bg-orange-500 w-fit p-2 rounded-lg font-bold">
          Our Mission
        </p>
        <h2 className="text-4xl font-bold md:text-5xl">
          Help more people cook nourishing meals, more often.
        </h2>
        <p className="text-xl">
          Healthy Recipe Finder was created to prove that helathy eating can be
          convenient, affordable, and genuinely delicious.
        </p>
        <p>
          We showcase quick, whole-food dishes that anyone can master--no fancy
          equipment, no ultra-processed shortcuts--just honest ingrediants and
          straightforward steps
        </p>
      </div>

      <picture className="lg:w-1/2">
        <source srcSet={imageAboutOurMissionLarge} media="(min:width:1024px)" />
        <img
          src={imageAboutOurMissionSmall}
          alt=""
          className="rounded-lg w-full"
        />
      </picture>
    </section>
  );
}
