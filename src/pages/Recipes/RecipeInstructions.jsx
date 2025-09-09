import React from "react";
import RecipeCardLayout from "./RecipeCardLayout";
import { useParams } from "react-router";
import RecipeData from "../../assets/data/data.json"
export default function RecipeInstructions() {
  const { id } = useParams();
  const recipe = RecipeData.find((recipe) => String(recipe.id) === id);

  if (!recipe) return <div>Recipe not found.</div>;
  return (
    <RecipeCardLayout
      recipe={recipe}
      showButton={false}
      showInstructions={true}
    />
  );
}
