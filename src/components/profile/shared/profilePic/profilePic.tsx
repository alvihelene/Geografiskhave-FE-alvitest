import React from "react";
import { IProfileImage } from "../../../../interfaces/IProfileImage";
import "./profilePic.scss";
const profilePic = ({ imgSrc, alt, onClick, editable }: IProfileImage) => {
  return (
    <div className="ProfilePic_Container">
      <img
        src={imgSrc}
        alt={alt}
        onClick={() => onClick}
        className="ProfilePic"
      />
      {editable && (
        <div className="ProfilePic_Overlay">{/* TODO: ADD ICON */}x</div>
      )}
    </div>
  );
};

export default profilePic;
