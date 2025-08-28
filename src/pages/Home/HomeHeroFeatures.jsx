import React from "react";
import iconWholeFoodRecipes from "../../assets/images/icon-whole-food-recipes.svg";
import iconMinimumFuss from "../../assets/images/icon-minimum-fuss.svg";
import iconSearch from "../../assets/images/icon-search.svg";

export default function HomeHeroFeatures() {
  const features = [
    {
      icon: iconWholeFoodRecipes,
      title: "Whole-food recipes",
      desc: "Each dish uses everyday,unprocessed ingrediants",
    },
    {
      icon: iconMinimumFuss,
      title: "Minimum fuss",
      desc: "All recipes are designed to make eating healthy quick and easy",
    },
    {
      icon: iconSearch,
      title: "Search in seconds",
      desc: "Filter by name or ingrediant and jump straight to the recipe you need",
    },
  ];

  return (
    <section className="py-16">
      <p className="text-4xl font-extrabold mb-8 md:text-center">
        What you'll get
      </p>
      <div className="flex ">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col mb-6 flex-1">
            <div className="w-15 h-15 mb-5 bg-white flex items-center justify-center rounded-2xl">
              <img src={feature.icon} alt="" className="w-8 h-8" />
            </div>
            <h3 className="text-3xl mb-3 font-bold leading-[130%] tracking-[-1px]">
              {feature.title}
            </h3>
            <p className="text-xl tracking-tight leading-[150%]">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
