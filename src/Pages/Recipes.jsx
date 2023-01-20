import React from "react";
import RecipeCards from "../Components/RecipeCards";
import "../Styles/Recipes.css";

function Recipes() {
  return (
    <div>
      <div className="add-menu">
        <a href="/add-food">
          <button className="btn-add">
            <i class="bi bi-plus-square-fill"></i> Menu
          </button>
        </a>
      </div>
      <div className="recipe-list">
        <RecipeCards />
      </div>
    </div>
  );
}

export default Recipes;

{
  /* <div className="add-menu">
  <button>
    <i class="bi bi-plus-square-fill"></i> Menu
  </button>
</div>; */
}
