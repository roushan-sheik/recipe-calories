import React from "react";
import Recipe from "./Recipe";
import CurrentlyCook from "./cart/CurrentlyCook";
import WantCook from "./cart/WantCook";
import RecipeHeader from "./header/RecipeHeader";

const Recipes = ({ recipes }) => {
  // store the clicked recipe data
  const [recipe, setRecipe] = React.useState([]);
  // get data from recipe
  function getDataFromRecipe(data) {
    setRecipe([...recipe, data]);
  }
  // console.log(recipe);

  return (
    <div className=" mt-[90px]">
      {/* Recipe Header  */}
      <RecipeHeader />
      {/* Main box of recipe  */}
      <div className="flex gap-6 flex-col lg:flex-row mt-10">
        {/* Let Recipe Parent Box  */}
        <div className="basis-[65%] grid grid-cols-1 lg:grid-cols-2 gap-5">
          {recipes.map((recipe) => (
            <Recipe
              getDataFromRecipe={getDataFromRecipe}
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
        {/* Left cart parent Box */}
        <div className="flex flex-col basis-[35%] border border-[#28282833] rounded-2xl  shadow-sm bg-white">
          <WantCook />
          <CurrentlyCook />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
