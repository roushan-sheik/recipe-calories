import React from "react";

const DynamicCook = () => {
  function handleBtnClick() {}
  return (
    <>
      <div className=" p-4 flex gap-4 text-xs secondary_black bg-[#28282808] justify-start ">
        <span className="basis-[2%] flex justify-center items-center font-bold">
          0
        </span>
        <span className="basis-[28%] ">Chicken Caesar Salad</span>
        <span className="basis-[25%]">20 minute</span>
        <span className="basis-[25%]">500</span>
        <span className="basis-[20%]">
          <button
            onClick={handleBtnClick}
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
