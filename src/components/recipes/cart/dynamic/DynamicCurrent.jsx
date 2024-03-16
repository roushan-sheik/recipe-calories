import React from "react";

const DynamicCurrent = ({ item, index }) => {
  // console.log("item:", item);
  const { name, time, calories } = item;

  return (
    <>
      <div className=" p-4 flex gap-4 text-xs secondary_black bg-[#28282808] justify-start ">
        <span className="basis-[3%] flex justify-center items-center font-bold">
          {index}
        </span>
        <span className="basis-[32%] ">{name}</span>
        <span className="basis-[32%]">{time}</span>
        <span className="basis-[32%]">{calories}</span>
      </div>
    </>
  );
};

export default DynamicCurrent;
