import React from "react";
import Recipe from "./Recipe";
import CurrentlyCook from "./cart/CurrentlyCook";
import WantCook from "./cart/WantCook";
import RecipeHeader from "./header/RecipeHeader";

const Recipes = ({ recipes }) => {
  return (
    <div className=" mt-[90px]">
      {/* Recipe Header  */}
      <RecipeHeader />
      {/* Main box of recipe  */}
      <div>
        {/* Let Recipe Parent Box  */}
        <div>
          {recipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
        </div>
        {/* Left cart parent Box */}
        <div className="flex flex-col">
          <WantCook />
          <CurrentlyCook />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
