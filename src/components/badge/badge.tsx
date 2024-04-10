import { IBadge } from "../../interfaces/IBadge";
import "./badge.scss";
import React from "react";

const Badge = ({ name, image, completed, description }: IBadge) => {
  return (
    <div className="Badge">
      <img
        className={`Badge_Image ${completed ? "Badge_Completed" : ""}`}
        src={image}
        alt={name}
      />
    </div>
  );
};

export default Badge;
