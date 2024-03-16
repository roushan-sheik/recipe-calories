import React from "react";
import DynamicCook from "./dynamic/DynamicCook";
// give me a react jsx table : heading : "want to cook",  row : name ,time,  calories , button
const WantCook = ({ clickedRecipe }) => {
  return (
    <div className="mt-4">
      <div className="p-4">
        <h2 className="primary_black text-xl font-semibold text-center ">
          Want to Cook: <span>{clickedRecipe.length}</span>
        </h2>
      </div>
      {/* name filed */}
      <div>
        {/* Header  */}
        <div className="p-4  flex gap-4 text-sm third_black justify-start ">
          <span className="basis-[2%]"></span>
          <span className="basis-[28%] ">Name</span>
          <span className="basis-[25%]">Time</span>
          <span className="basis-[25%]">Calories</span>
          <span className="basis-[20%]"></span>
        </div>
        {/* Dynamic want to cook row parent box  */}
        <div className=" flex flex-col gap-2">
          {/* <DynamicCook /> */}
          {/* <DynamicCook /> */}
          {clickedRecipe.map((singleRecipe, index) => (
            <DynamicCook
              key={singleRecipe.name}
              index={index}
              singleRecipe={singleRecipe}
            />
          ))}
        </div>
        {/* Dynamic dynamic currently cooking row parent box  */}
        <div></div>
      </div>
    </div>
  );
};

export default WantCook;
