import React from "react";
import RecipeCardLayout from "./RecipeCardLayout";

export default function RecipesCard({ recipe }) {
  return (
    <RecipeCardLayout
      recipe={recipe}
      showButton={true}
      showInstructions={false}
    />
  );
}
