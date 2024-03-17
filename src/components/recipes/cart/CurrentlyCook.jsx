import React from "react";
import DynamicCurrent from "./dynamic/DynamicCurrent";

const CurrentlyCook = ({ prepareData }) => {
  const [totalTime, setTotalTime] = React.useState(0);
  const [ totalCalories, setTotalCalories ] = React.useState( 0 );
  // prepareData.reduce((acc, cur)=>acc.time+)
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
          <span className="basis-[30%] ">Name</span>
          <span className="basis-[33%]">Time</span>
          <span className="basis-[33%]">Calories</span>
        </div>
        {/* Dynamic want to cook row parent box  */}
        <div className=" flex flex-col gap-2">
          {/* <DynamicCurrent />
          <DynamicCurrent /> */}
          {prepareData.map((item, index) => (
            <DynamicCurrent
              key={(item.name, item.time)}
              item={item}
              index={index}
            />
          ))}
          {/* total time and calories  */}
          <div className=" p-4 flex gap-4 text-xs font-[600] secondary_black bg-[#28282808] justify-start ">
            <span className="basis-[3%] flex justify-center items-center font-bold"></span>
            <span className="basis-[30%] "></span>
            <span className="basis-[33%]">
              Total Time = {totalTime} minutes
            </span>
            <span className="basis-[33%]">
              Total Calories = {totalCalories} calories
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyCook;
