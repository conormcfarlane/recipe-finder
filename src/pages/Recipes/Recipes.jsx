import React from "react";
import RecipesHero from "./RecipesHero";

export default function Recipes() {
  return (
    <section>
      <div>
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
