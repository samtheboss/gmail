import React from "react";

const Email = ({ Message, messageTitle, timestamp, expeditor }) => {
  return (
    <div>
      <div className="flex justify-between border-b pb-1 pt-1 px-6">
       <p className="w-[8rem] font-bold">{expeditor}</p> 
       <div className="flex items-center w-[40rem] truncate">
          <p className="font-semibold w-[10rem]">{messageTitle}</p>
          <p className="pl-1 text-gray-500"> {Message}</p>
        </div>
        <p className="text-gray-500 w-[8rem] text-end">{timestamp}</p>
      </div>
    </div>
  );
};

export default Email;
