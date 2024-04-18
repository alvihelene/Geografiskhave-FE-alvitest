import React from "react";
import { IButton } from "../../../interfaces/IButton";
import "./button.scss"
 
const Button = ({ text, size, color, onClick }: IButton) => {
  return (
    <button className={`defButton ${size=="small"? "smallBoldText": "bold"} ${size} ${color}`}>{text}</button>
  );
};

export default Button;