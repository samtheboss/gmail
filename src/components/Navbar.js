import React from "react";
import logo from "../asserts/logo.png";
import { FiMenu } from "react-icons/fi";
import { MdOutlineSearch } from "react-icons/md";
import { RiAppsLine } from "react-icons/ri";
import person from "../asserts/person.png";

const Navbar = () => {
  return (
    <div
      className="flex items-center
    justify-between
     py-5 px-6 border-b sticky top-0 bg-white"
    >
      <div className="flex items-center gap-4">
        <FiMenu className="hidden md:flex w-7 h-7 text-gray-600" />
        <div className="w-16 h-[2.3rem] flex rounded -[0.5rem]">
          <img
            src={logo}
            alt=""
            className="object-cover w-full  h-full rounded -[0.5rem]"
          />
        </div>
        <p className="text-[25px]   font-semibold -ml-1 text-gray-600">Gmail</p>
      </div>
      <div className="hidden lg:block w-full">
        <div className=" flex items-center relative mx-auto max-w-[20rem]">
          <input
            type="search"
            className="outline-0 bg-slate-200 py-1 rounded-full w-full pl-4"
            placeholder="Saerch"
          />
          <div className="bg-[#64b3ff] absolute right-0 p-2 rounded-r-full">
            <MdOutlineSearch className="mr-1" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <RiAppsLine className="w-6 h-6 flex" />
        <div
          className="flex items-center gap-3 border-2
        rounded-full border-[#98d4fa]"
        >
          <div className="w-[39px] h-[39px]  flex p-[2px] bg-[#98d4fa] rounded-full">
            <img
              src={person}
              className="object-cover rounded-full"
              alt=""
            />
          </div>
          <p className="whitespace-nowrap text-[20px] pr-2 font-semibold">
            SmartApps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
