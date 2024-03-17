import React from "react";

const RecipeHeader = () => {
  return (
    <div>
      {/* Header content  */}
      <div className="flex flex-col items-center">
        <h2 className="lg:text-[35px] text-2xl  font-bold primary_black text-center">
          Our Recipes
        </h2>
        <p className="text-center third_black w-[60%] mt-5 ">
          Our recipes are carefully curated to delight your taste buds and
          inspire your culinary creativity. Each recipe is crafted with
          precision and passion, drawing inspiration from diverse cuisines and
          culinary traditions from around the world.
        </p>
      </div>
    </div>
  );
};

export default RecipeHeader;
