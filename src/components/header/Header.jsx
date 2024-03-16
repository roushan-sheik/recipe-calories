import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <nav>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start  ">
          {/* Left box */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm gap-3 bg-gray-200  dropdown-content mt-3 z-[1] p-4 shadow  rounded-box w-52"
            >
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Recipe</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Search</li>
            </ul>
          </div>
          <a className=" text-nowrap lg:text-2xl text-lg font-bold primary_black">
            Recipe Calories
          </a>
        </div>
        {/* center box  */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 text-sm secondary_black items-center">
            <li className="cursor-pointer _li">Home</li>
            <li className="cursor-pointer _li">Recipe</li>
            <li className="cursor-pointer _li">About</li>
            <li className="cursor-pointer _li">Search</li>
          </ul>
        </div>
        {/* right nav box */}
        <div className="navbar-end gap-4">
          <div className=" py-2 px-4 hidden lg:flex text-base gap-2 items-center bg-[#150b2b0d] rounded-3xl">
            <IoSearchOutline />
            <input
              className="bg-[#150b2b00]   focus:outline-none"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="text-xl rounded-full cursor-pointer bg_primary p-2">
            <CgProfile />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
