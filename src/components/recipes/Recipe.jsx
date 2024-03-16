import React from "react";

const Recipe = ({ recipe }) => {
  return (
    <div className="border border-[#28282833] rounded-2xl p-5 shadow-sm bg-white">
      {/* image box  */}
      <div className="h-[200px] rounded-2xl overflow-hidden">
        <img
          className="w-full hover:scale-110 duration-300 ease-in h-full object-cover rounded-2xl"
          src={recipe.image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Recipe;
