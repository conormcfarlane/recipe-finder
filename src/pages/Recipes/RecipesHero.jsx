import React, { useState } from "react";
import RecipesList from "./RecipesList";
import RecipeData from "../../assets/data/data.json";

export default function RecipesHero() {
  const [filterType, setFilterType] = useState(null);
  const [filterValue, setFilterValue] = useState(null);

  const filteredRecipes = RecipeData.filter((recipe) => {
    if (filterType === "prep") return recipe.prepMinutes >= filterValue;
    if (filterType === "cook") return recipe.cookMinutes >= filterValue;
  });
  return (
    <div>
      <select value={filterType}>
        
      </select>
      <RecipesList />
    </div>
  );
}
