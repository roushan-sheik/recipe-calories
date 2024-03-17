import React from "react";
import { FaFire } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

const Recipe = ({ recipe, getDataFromRecipe }) => {
  const { id, name, image, description, ingredients, time, calories } = recipe;
  // handleBtnClick
  function handleBtnClick() {
    let clickedObj = { name, time, calories };
    getDataFromRecipe(clickedObj);
  }
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
        <p className="third_black, text-sm mt-3">{description}</p>
        {/* ingredients box  */}
        <div>
          <h3 className="primary_black text-sm font-semibold mt-5">
            Ingredients: {ingredients.length}
          </h3>
          <ul className=" mt-3">
            {ingredients.map((item) => {
              return (
                <li
                  key={item}
                  className=" text-sm list-disc list-inside  third_black"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        {/* footer timer and calories box  */}
        <div className="mt-5 flex gap-2">
          <div className="flex items-center gap-1 cursor-pointer secondary_black text-sm">
            <IoTimeOutline />
            <span className="text-xs">{time} minutes</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer secondary_black text-sm">
            <FaFire />
            <span className="text-xs">{calories}</span>
          </div>
        </div>
        {/* button  */}
        <div className="flex justify-center lg:justify-start mt-5">
          <button
            onClick={handleBtnClick}
            className="rounded-[50px] bg_primary px-4 py-3 font-[600] text-sm   black_primary duration-300 active:scale-95"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
