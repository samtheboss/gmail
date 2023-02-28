import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaInbox, FaStar } from "react-icons/fa";
import { MdLabelImportant,MdSend,MdDrafts,MdCategory} from "react-icons/md";
import SIdebtn from "./SIdebtn";

const LeftSide = () => {
  const buttons = [
    { icon: <FaInbox className="w-[1.7rem] h-[1.7rem]"/>, title: "Inbox" },
    { icon: <FaStar className="w-[1.7rem] h-[1.7rem]"/>, title: "Favarite" },
    { icon: <MdLabelImportant className="w-[1.7rem] h-[1.7rem]"/>, title: "Important" },
    { icon: <MdSend className="w-[1.7rem] h-[1.7rem]" />, title: "Send" },
    { icon: <MdDrafts className="w-[1.7rem] h-[1.7rem]"/>, title: "Drafts" },
    { icon: <MdCategory className="w-[1.7rem] h-[1.7rem]"/>, title: "Category" },
    { icon: <FaInbox className="w-[1.7rem] h-[1.7rem]"/>, title: "Inbox" },
    { icon: <FaStar className="w-[1.7rem] h-[1.7rem]"/>, title: "Favarite" },
    { icon: <MdLabelImportant className="w-[1.7rem] h-[1.7rem]"/>, title: "Important" },
   
  ];
  return (
    <div className="hidden lg:block w-[15rem] 
    p-4 sticky top-20 h-full">
      <div
        className="flex items-center justify-center
       shadow-md shadow-gray-600 w-36 h-10 rounded-full "
      >
        <BsPencilSquare className="w-5 h-5 mr-2 " />
        <p>Compose</p>
      </div>
      <div className="pl-6 pt-2 space-y-4">
        {buttons.map((button) => (
          <SIdebtn icon={button.icon} title={button.title} />
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
