import React, { useState } from "react";
import RecipesList from "./RecipesList";
import RecipeData from "../../assets/data/data.json";
import RecipePrepFilter from "./RecipePrepFilter";
import RecipeCookFilter from "./RecipeCookFilter";
import RecipeSearch from "./RecipeSearch";
import iconChevronDown from "/images/icon-chevron-down.svg";

export default function RecipesHero() {
  const [prepFilter, setPrepFilter] = useState(null);
  const [cookFilter, setCookFilter] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const prepOptions = [0, 5, 10];
  const cookOptions = [0, 5, 10, 15, 20];
  const filteredRecipes = RecipeData.filter((recipe) => {
    const prepMatch = prepFilter
      ? recipe.prepMinutes <= Number(prepFilter)
      : true;
    const cookMatch = cookFilter
      ? recipe.cookMinutes <= Number(cookFilter)
      : true;
    const searchMatch = searchTerm
      ? recipe.title
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase()) ||
        recipe.ingredients.some((ing) =>
          ing.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        )
      : true;
    return prepMatch && cookMatch && searchMatch;
  });
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col w-full items-center gap-3 md:flex-row">
        <div className="w-full lg:max-w-1/5">
          <RecipePrepFilter
            prepFilter={prepFilter}
            setPrepFilter={setPrepFilter}
            options={prepOptions}
            icon={iconChevronDown}
          />
        </div>
        <div className="w-full lg:max-w-1/5">
          <RecipeCookFilter
            cookFilter={cookFilter}
            setCookFilter={setCookFilter}
            options={cookOptions}
            icon={iconChevronDown}
          />
        </div>
        <div className="w-full lg:max-w-2/5 ml-auto">
          <RecipeSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>

      <RecipesList filteredRecipes={filteredRecipes} />
    </div>
  );
}
