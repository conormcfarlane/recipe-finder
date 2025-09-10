import React, { useState } from "react";
import RecipesList from "./RecipesList";
import RecipeData from "../../assets/data/data.json";
import RecipePrepFilter from "./RecipePrepFilter";
import RecipeCookFilter from "./RecipeCookFilter";

export default function RecipesHero() {
  const [prepFilter, setPrepFilter] = useState(null);
  const [cookFilter, setCookFilter] = useState(null);
  const prepOptions = [0, 5, 10];
  const cookOptions = [0, 5, 10, 15, 20];
  const filteredRecipes = RecipeData.filter((recipe) => {
    const prepMatch = prepFilter
      ? recipe.prepMinutes <= Number(prepFilter)
      : true;
    const cookMatch = cookFilter
      ? recipe.cookMinutes <= Number(cookFilter)
      : true;
    return prepMatch && cookMatch;
  });
  return (
    <div>
      <div className="flex flex-col w-full items-center">
        <RecipePrepFilter
          prepFilter={prepFilter}
          setPrepFilter={setPrepFilter}
          options={prepOptions}
        />
        <RecipeCookFilter
          cookFilter={cookFilter}
          setCookFilter={setCookFilter}
          options={cookOptions}
        />
      </div>

      <RecipesList filteredRecipes={filteredRecipes} />
    </div>
  );
}
