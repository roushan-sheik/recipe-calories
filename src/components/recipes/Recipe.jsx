import React from "react";

const Recipe = ({ recipe }) => {
  const { id, name, image, description, ingredients, time, calories } = recipe;
  return (
    <div className="border border-[#28282833] rounded-2xl p-5 shadow-sm bg-white">
      {/* image box  */}
      <div className="h-[200px] rounded-2xl overflow-hidden">
        <img
          className="w-full hover:scale-110 duration-300 ease-in h-full object-cover rounded-2xl"
          src={image}
          alt=""
        />
      </div>
      {/* cart content box  */}
      <div>
        <h4 className="text-lg mt-5 font-semibold primary_black">{name}</h4>
        <p className="third_black, text-sm mt-3">{ description }</p>
        
        <div></div>
      </div>
    </div>
  );
};

export default Recipe;
