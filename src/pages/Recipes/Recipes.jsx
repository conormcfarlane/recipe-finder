import React from "react";
import RecipesHero from "./RecipesHero";

export default function Recipes() {
  return (
    <section className="flex flex-col gap-12 lg:items-center">
      <div className="flex flex-col gap-4 lg:items-center lg:max-w-6/10">
        <p className="text-4xl">Explore our simple,healthy recipes</p>
        <p>
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste amazing. Use the search bar to find a recipe by name or
          ingredient, or simply scroll the list and let something delicious
          catch your eye.
        </p>
      </div>
      <RecipesHero />
    </section>
  );
}
