import React from "react";
import Email from "./Email";

const Emails = () => {
  const emailList = [
    {
      expeditor: "Designmode",
      messageTitle: "Holiday special !",
      Message: "North Woods Audio and Sound LLc 10% off Products",
      timestamp: "11:00 am",
    },
    {
      expeditor: "Designmode",
      messageTitle: "Holiday special !",
      Message: "North Woods Audio and Sound LLc 10% off Products",
      timestamp: "11:00 am",
    },
    {
      expeditor: "Designmode",
      messageTitle: "Holiday special !",
      Message: "North Woods Audio and Sound LLc 10% off Products",
      timestamp: "11:00 am",
    },
    {
      expeditor: "Designmode",
      messageTitle: "Holiday special !",
      Message: "North Woods Audio and Sound LLc 10% off Products",
      timestamp: "11:00 am",
    },
    {
      expeditor: "Designmode",
      messageTitle: "Holiday special !",
      Message: "North Woods Audio and Sound LLc 10% off Products",
      timestamp: "11:00 am",
    },
    {
      expeditor: "Designmode",
      messageTitle: "Holiday special !",
      Message: "",
      timestamp: "11:00 am",
    },
    {
      expeditor: "Designmode",
      messageTitle: "Holiday special !",
      Message: "North Woods Audio and Sound LLc 10% off Products",
      timestamp: "11:00 am",
    },
    {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "North Woods Audio and Sound LLc 10% off Products",
        timestamp: "11:00 am",
      },
      {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "North Woods Audio and Sound LLc 10% off Products",
        timestamp: "11:00 am",
      },
      {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "North Woods Audio and Sound LLc 10% off Products",
        timestamp: "11:00 am",
      },
      {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "North Woods Audio and Sound LLc 10% off Products",
        timestamp: "11:00 am",
      },
      {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "North Woods Audio and Sound LLc 10% off Products",
        timestamp: "11:00 am",
      },
      {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "",
        timestamp: "11:00 am",
      },
      {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "North Woods Audio and Sound LLc 10% off Products",
        timestamp: "11:00 am",
      }, {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "North Woods Audio and Sound LLc 10% off Products",
        timestamp: "11:00 am",
      },
      {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "North Woods Audio and Sound LLc 10% off Products",
        timestamp: "11:00 am",
      },
      {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "North Woods Audio and Sound LLc 10% off Products",
        timestamp: "11:00 am",
      },
      {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "North Woods Audio and Sound LLc 10% off Products",
        timestamp: "11:00 am",
      },
      {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "North Woods Audio and Sound LLc 10% off Products",
        timestamp: "11:00 am",
      },
      {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "",
        timestamp: "11:00 am",
      },
      {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "North Woods Audio and Sound LLc 10% off Products",
        timestamp: "11:00 am",
      }, {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "North Woods Audio and Sound LLc 10% off Products",
        timestamp: "11:00 am",
      },
      {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "North Woods Audio and Sound LLc 10% off Products",
        timestamp: "11:00 am",
      },
      {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "North Woods Audio and Sound LLc 10% off Products",
        timestamp: "11:00 am",
      },
      {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "North Woods Audio and Sound LLc 10% off Products",
        timestamp: "11:00 am",
      },
      {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "North Woods Audio and Sound LLc 10% off Products",
        timestamp: "11:00 am",
      },
      {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "",
        timestamp: "11:00 am",
      },
      {
        expeditor: "Designmode",
        messageTitle: "Holiday special !",
        Message: "North Woods Audio and Sound LLc 10% off Products",
        timestamp: "11:00 am",
      },
  ];
  return (
    <div className="">
      {emailList.map((email) => (
        <Email
          expeditor={email.expeditor}
          messageTitle={email.messageTitle}
          Message={email.Message}
          timestamp={email.timestamp}
        />
      ))}
    </div>
  );
};

export default Emails;
