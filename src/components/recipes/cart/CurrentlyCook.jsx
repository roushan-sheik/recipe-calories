import React from "react";
import DynamicCurrent from "./dynamic/DynamicCurrent";

const CurrentlyCook = ({ prepareData }) => {
  // console.log("prepareData:", prepareData);
  return (
    <div className="">
      <div className="p-4">
        <h2 className="primary_black text-xl font-semibold text-center ">
          Currently Cooking: <span>{prepareData.length}</span>
        </h2>
      </div>
      {/* name filed */}
      <div>
        {/* Header  */}
        <div className="p-4  flex gap-4 text-sm third_black justify-start ">
          <span className="basis-[3%]"></span>
          <span className="basis-[32%] ">Name</span>
          <span className="basis-[32%]">Time</span>
          <span className="basis-[32%]">Calories</span>
        </div>
        {/* Dynamic want to cook row parent box  */}
        <div className=" flex flex-col gap-2">
          {/* <DynamicCurrent />
          <DynamicCurrent /> */}
          {prepareData.map((item, index) => (
            <DynamicCurrent key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentlyCook;
