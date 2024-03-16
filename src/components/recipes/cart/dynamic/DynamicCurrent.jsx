import React from "react";

const DynamicCurrent = () => {
  function handleBtnClick() {}
  return (
    <>
      <div className=" p-4 flex gap-4 text-xs secondary_black bg-[#28282808] justify-start ">
        <span className="basis-[3%] flex justify-center items-center font-bold">
          0
        </span>
        <span className="basis-[32%] ">Chicken Caesar Salad</span>
        <span className="basis-[32%]">20 minute</span>
        <span className="basis-[32%]">500</span>
      </div>
    </>
  );
};

export default DynamicCurrent;
