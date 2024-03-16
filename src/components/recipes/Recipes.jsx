import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Recipe from "./Recipe";
import CurrentlyCook from "./cart/CurrentlyCook";
import WantCook from "./cart/WantCook";
import RecipeHeader from "./header/RecipeHeader";

const Recipes = ({ recipes }) => {
  //NOTE - store the clicked recipe data
  const [ clickedRecipe, setClickedRecipe ] = React.useState( [] );
  const [prepareData , setPrepareData]= React.useState([])
  //NOTE - get data from recipe
  function getDataFromRecipe(data) {
    // check already Exists
    const isExist = clickedRecipe.find((rec) => rec.name === data.name);
    if (isExist) {
      toast.error("Already Exists! !", {
        position: "top-right",
      });
      // alert("Item already exist");
      return;
    } else {
      setClickedRecipe([...clickedRecipe, data]);
      toast.success("Successfully added", {
        position: "top-center",
      });
    }
  }
  // console.log(recipe);
  //NOTE - get data from prepare
  function getDataFromPrepare ( data )
  {
    
    // alert(data);
  }
  return (
    <div className=" mt-[90px]">
      {/* toast  message */}
      <ToastContainer />
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
          <WantCook
            clickedRecipe={clickedRecipe}
            getDataFromPrepare={getDataFromPrepare}
          />
          <CurrentlyCook />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
