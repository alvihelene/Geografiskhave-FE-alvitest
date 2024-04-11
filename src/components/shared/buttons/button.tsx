import React from "react";
import { IButton } from "../../../interfaces/IButton";
import "./button.scss"
 
const Button = ({ text, size, color, onClick }: IButton) => {
  return (
    <button 
    className={`${size=="small"? "smallBoldText": "bold"} ${size} ${color}`}
    onClick={() => onClick}
    >{text}</button>
  );
};

export default Button;