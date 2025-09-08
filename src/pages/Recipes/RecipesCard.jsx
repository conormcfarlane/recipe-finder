import React from "react";
import iconServing from "/images/icon-servings.svg";
import iconPrepTime from "/images/icon-prep-time.svg";
import iconCookTime from "/images/icon-cook-time.svg";
import { Link } from "react-router";

export default function RecipesCard({ recipe }) {
  const imageSmallFilename = recipe.image.small.split("/").pop();

  const imageSmallUrl = `/images/${imageSmallFilename}`;
  const recipeDetails = [
    { name: "Servings:", quantity: recipe.servings, icon: iconServing },
    {
      name: "Prep: ",
      quantity: `${recipe.prepMinutes} ${
        recipe.prepMinutes === 1 ? "min" : "mins"
      } `,
      icon: iconPrepTime,
    },
    {
      name: "Cook:",
      quantity: `${recipe.cookMinutes} ${
        recipe.cookMinutes === 1 ? "min" : "mins"
      }`,
      icon: iconCookTime,
    },
  ];
  return (
    <div className="flex flex-col bg-green-400 gap-3 ">
      <img src={imageSmallUrl} alt="" />
      <p>{recipe.title}</p>
      <p>{recipe.overview}</p>
      <div className="flex flex-wrap items-center gap-4">
        {recipeDetails.map((detail) => (
          <div key={detail.name} className="flex gap-1">
            <img src={detail.icon} alt="" />
            <p>{detail.name}</p>
            <p>{detail.quantity}</p>
          </div>
        ))}
      </div>
      <Link to={`/recipes/${recipe.id}`}>
        <button className="bg-green-900 cursor-pointer w-full rounded-full py-3 text-white">
          View Recipe
        </button>
      </Link>
    </div>
  );
}
