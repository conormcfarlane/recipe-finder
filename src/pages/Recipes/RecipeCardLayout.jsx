import React from "react";
import { Link } from "react-router-dom";
import iconServing from "/images/icon-servings.svg";
import iconPrepTime from "/images/icon-prep-time.svg";
import iconCookTime from "/images/icon-cook-time.svg";
import iconBulletPoint from "/images/icon-bullet-point.svg";

export default function RecipeCardLayout({
  recipe,
  showButton = false,
  showInstructions = false,
  direction = "col",
}) {
  const imageSmallFilename = recipe.image.small.split("/").pop();
  const imageLargeFilename = recipe.image.large.split("/").pop();

  const imageSmallUrl = `/images/${imageSmallFilename}`;
  const imageLargeUrl = `/images/${imageLargeFilename}`;
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
  const ingredientsInstructionsArray = [
    { title: "Ingredients: ", items: recipe.ingredients },
    {
      title: "Instructions:",
      items: recipe.instructions,
    },
  ];

  return (
    <div className={`flex flex-col lg:flex-${direction} gap-3 p-2 h-full`}>
      <picture>
        <source srcSet={imageLargeUrl} media="(min-width:1024px)" />
        <img src={imageSmallUrl} alt="" className="rounded-xl w-full" />
      </picture>
      <div className="lg:flex lg:flex-col lg:h-full">
        <div className="px-2 flex flex-col gap-3 flex-1">
          <p className="font-bold md:text-4xl">{recipe.title}</p>
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
        </div>
        {showButton && (
          <Link to={`/recipes/${recipe.id}`}>
            <button className="bg-green-900 cursor-pointer w-full rounded-full py-3 text-white mt-4 lg:mt-auto">
              View Recipe
            </button>
          </Link>
        )}
        {showInstructions && (
          <section className="mt-5">
            {ingredientsInstructionsArray.map((section, index) => (
              <div key={section.title}>
                <p>{section.title}</p>
                <ul>
                  {section.items.map((item, index) => (
                    <li key={index} className="flex gap-2 mb-2 items-center">
                      <img src={iconBulletPoint} alt="" />
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
