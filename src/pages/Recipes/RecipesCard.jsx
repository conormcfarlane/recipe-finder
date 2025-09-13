import React from "react";
import RecipeCardLayout from "./RecipeCardLayout";

export default function RecipesCard({ recipe }) {
  return (
    <div className="border-gray-300 border-1 rounded-xl bg-white">
      <RecipeCardLayout
        recipe={recipe}
        showButton={true}
        showInstructions={false}
        direction="col"
      />
    </div>
  );
}
