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
      <h2 className="text-4xl font-extrabold mb-8">What you'll get</h2>
      {features.map((feature) => (
        <div key={feature} className="flex flex-col mb-6">
          <img src={feature.icon} alt="" className="mb-6 w-6 h-6" />
          <h3 className="text-3xl mb-3 font-bold">{feature.title}</h3>
          <p>{feature.desc}</p>
        </div>
      ))}
    </section>
  );
}
