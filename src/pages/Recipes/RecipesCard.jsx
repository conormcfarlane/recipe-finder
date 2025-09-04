import React from "react";
import RecipeData from "../../assets/data/data.json";
import iconServing from "../../assets/images/icon-servings.svg";
import iconPrepTime from "../../assets/images/icon-prep-time.svg";
import iconCookTime from "../../assets/images/icon-cook-time.svg";

export default function RecipesCard() {
  const recipeCards = RecipeData.map((recipe) => ({
    id: recipe.id,
    title: recipe.title,
    overview: recipe.overview,
    details: [
      {
        label: "Servings:",
        value: recipe.servings,
        icon: iconServing,
      },
      {
        label: "Prep:",
        value: `${recipe.prepMinutes} ${
          recipe.prepMinutes === 0 ? "min" : "mins"
        }`,
        icon: iconPrepTime,
      },
      {
        label: "Cook:",
        value: `${recipe.cookMinutes} ${
          recipe.cookMinutes === 0 ? "min" : "mins"
        }`,
        icon: iconCookTime,
      },
    ],
  }));
  return (
    <div>
      {recipeCards.map((card, id) => (
        <div key={id} className=" bg-green-400 p-2">
          <div>
            <p>{card.title}</p>
            <p>{card.overview}</p>
          </div>
          <div className="flex flex-wrap p-2 gap-4">
            {card.details.map((detail) => (
              <div key={detail.label} className="flex items-center gap-1 p-1 ">
                <img src={detail.icon} alt="" />
                <p>{detail.label}</p>
                <p>{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
