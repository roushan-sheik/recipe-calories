import React from "react";

const DynamicCook = ({ singleRecipe, index, getDataFromPrepare }) => {
  const { name, time, calories } = singleRecipe;
  function handlePreparingClick() {
    getDataFromPrepare(name);
  }
  return (
    <>
      <div className=" p-4 flex gap-4 text-xs secondary_black bg-[#28282808] justify-start ">
        <span className="basis-[2%] flex justify-center items-center font-bold">
          {index + 1}
        </span>
        <span className="basis-[28%] ">{name}</span>
        <span className="basis-[25%]">{time}</span>
        <span className="basis-[25%]">{calories}</span>
        <span className="basis-[20%]">
          <button
            onClick={handlePreparingClick}
            className="rounded-[50px] bg_primary px-[10px] py-2 font-[600] text-sm primary_black duration-300 active:scale-95"
          >
            Preparing
          </button>
          <button></button>
        </span>
      </div>
    </>
  );
};

export default DynamicCook;
