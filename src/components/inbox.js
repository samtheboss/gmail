import React from "react";
import { BiPlusCircle, BiMoney, BiNews } from "react-icons/bi";
import { BsFillMenuButtonWideFill, BsCardChecklist } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { VscFileSubmodule } from "react-icons/vsc";
import { FaKeyboard } from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { MdPermMedia } from "react-icons/md";
import Category from "./Category";

const inbox = () => {
  const categories = [
    {
      logo: <IoMailOutline className="w-6 h-6 hover:text-yellow-500" />,
      title: "important",
      css: "hover:text-yellow-500 focus:text-yellow-500",
    },
    {
      logo: <MdPermMedia className="w-6 h-6" />,
      title: "Media",
      css: "hover:text-purple-500 focus:text-purple-500 ",
    },
    {
      logo: <BiMoney className="w-6 h-6" />,
      title: "Deals",
      css: "hover:text-green-500 focus:text-green-500",
    },
    {
      logo: <BiNews className="w-6 h-6" />,
      title: "News",
      css: "hover:text-gray-700 focus:text-gray-500",
    },
    {
      logo: <BsCardChecklist className="w-6 h-6" />,
      title: "chats",
      css: "hover:text-blue-500 focus:text-green-500 hidden sm:flex",
    },
  ];
  return (
    <div className="pt-3">
      <div
        className="px-6 flex items-center justify-between text-gray-500
      border-b"
      >
        <div className="flex items-center gap-6 ">
          <BiPlusCircle className="w-6 h-6" />
          <BsFillMenuButtonWideFill className="w-5 h-5" />
          <GoSettings className="w-6 h-6" />
        </div>

        <div className=" flex items-center gap-6 font-medium">
          <p> 1-50 of 354</p>
          <HiArrowsRightLeft className="w-5 h-5" />
          <VscFileSubmodule className="w-5 h-5" />
          <FaKeyboard className="w-5 h-5" />
          <RiUserSettingsLine className="w-5 h-5" />
        </div>
      </div>
      {/*categories*/}
      <div
        className="flex items-center justify-between
       px-6 border-b py-2 text-gray-500"
        text-gray-500
      >
        {categories.map((category) => (
          <Category
            logo={category.logo}
            title={category.title}
            css={category.css}
          />
        ))}
      </div>
    </div>
  );
};

export default inbox;
