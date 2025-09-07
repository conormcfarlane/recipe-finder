import React from "react";
import RecipeData from "../../assets/data/data.json";
import iconServing from "/images/icon-servings.svg";
import iconPrepTime from "/images/icon-prep-time.svg";
import iconCookTime from "/images/icon-cook-time.svg";

export default function RecipesCard() {
  const getImagePath = (jsonPath) => {
    const filename = jsonPath.split("/").pop();
    return `/images/${filename}`;
  };
  const recipeCards = RecipeData.map((recipe) => ({
    id: recipe.id,
    title: recipe.title,
    overview: recipe.overview,
    imageLarge: getImagePath(recipe.image.large),
    imageSmall: getImagePath(recipe.image.small),
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
          <picture>
            <source srcSet={card.imageLarge} media="(min-width:1024px)" />
            <img src={card.imageSmall} alt="" />
          </picture>
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
