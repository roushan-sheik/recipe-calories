import React from "react";

const RecipeHeader = () => {
  return (
    <div>
      {/* Header content  */}
      <div className="flex flex-col items-center">
        <h2 className="text-[35px] font-bold primary_black text-center">
          Our Recipes
        </h2>
        <p className="text-center third_black w-[60%] mt-5 ">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>
    </div>
  );
};

export default RecipeHeader;
