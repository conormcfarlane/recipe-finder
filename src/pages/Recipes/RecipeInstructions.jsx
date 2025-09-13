import React from "react";
import RecipeCardLayout from "./RecipeCardLayout";
import { useParams } from "react-router-dom";
import RecipeData from "../../assets/data/data.json";

export default function RecipeInstructions() {
  const { id } = useParams();
  const recipe = RecipeData.find((recipe) => String(recipe.id) === id);
  const moreRecipes = RecipeData.filter((recipe) => recipe.id !== id).splice(
    0,
    3
  );
  if (!recipe) return <div>Recipe not found.</div>;
  return (
    <section>
      <div className="border-b-1 border-gray-300">
        <RecipeCardLayout
          recipe={recipe}
          showButton={false}
          showInstructions={true}
          direction="row"
        />
      </div>

      <div className="">
        <p className="text-3xl mt-12 mb-4">More Recipes</p>
        <div className="lg:grid lg:grid-cols-3">
          {moreRecipes.map((recipe) => (
            <RecipeCardLayout
              recipe={recipe}
              showButton={true}
              showInstructions={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
