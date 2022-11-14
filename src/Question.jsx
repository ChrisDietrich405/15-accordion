import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ info }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={{ fontSize: "2rem", color: "white" }}>{info.title}</div>
      {isOpen ? (
        <AiOutlineMinus onClick={() => setIsOpen(false)} style={{ color: "white" }} />
      ) : (
        <AiOutlinePlus onClick={() => setIsOpen(true)} style={{ color: "white" }} />
      )}
      {isOpen ? <div style={{ color: "white" }}>{info.info}</div> : ""}
    </>
  );
};

export default Question;
