import React from "react";
import RecipeCards from "../Components/RecipeCards";
import "../Styles/Recipes.css";

function Recipes() {
  return (
    <div className="recipe-list">
      <RecipeCards />
    </div>
  );
}

export default Recipes;
