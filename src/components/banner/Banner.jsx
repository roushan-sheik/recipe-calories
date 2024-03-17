import React from "react";

const Banner = () => {
  return (
    <div id="banner" className="lg:p-[100px] p-6 ">
      {/* content box  */}
      <div className="flex flex-col justify-center text-white">
        <h2 className="lg:text-[40px] text-3xl  font-bold text-center text-white">
          Discover an exceptional cooking class tailored for you!
        </h2>
        <p className="mt-[22px] text-base text-center">
          Embark on a culinary journey like no other with our personalized
          cooking class experience! Discover the art of cooking in a way that
          caters specifically to your tastes, preferences, and skill level.
        </p>
      </div>
      {/* button box  */}
      <div className="mt-8 flex flex-col lg:flex-row justify-center items-center gap-6">
        <button className="rounded-[50px] bg_primary lg:px-8 px-6 lg:py-3 py-2 font-[600] text-lg lg:text-xl black_primary duration-300 active:scale-95">
          Explore Now
        </button>
        <button
          id="Feedback_btn"
          className="rounded-[50px] font-[700] border border-white lg:px-8 px-6 lg:py-3 py-2 text-lg lg:text-xl text-white duration-200 hover:bg-gray-200 hover:text-white"
        >
          Our Feedback
        </button>
      </div>
    </div>
  );
};

export default Banner;
