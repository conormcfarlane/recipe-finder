import React from 'react'
import { useParams } from 'react-router-dom'
import RecipeData from "../../assets/data/data.json"

export default function RecipeInstructions() {
    const {id} = useParams();
    const recipe = RecipeData.find((recipe) => String(recipe.id) === id)
  return (
    <div>{recipe.title}</div>
  )
}
