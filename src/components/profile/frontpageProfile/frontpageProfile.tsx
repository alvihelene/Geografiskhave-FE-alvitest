import React from "react";
import "./frontpageProfile.scss";
import ProfilePic from "../shared/profilePic/profilePic";

const frontpageProfile = () => {
  //TODO: ADD STORE IMPLEMENTATION
  return (
    <div className="frontPageProfile_Container">
      <div className="frontpageProfile_ImageContainer">
        <ProfilePic
          imgSrc="https://via.placeholder.com/150"
          alt="profile"
          editable={false}
        />
      </div>
      <div className="frontpageProfile_InfoContainer">
        <p className="frontpageProfile_Greeting">Goddag</p>
        <p className="frontpageProfile_Username">Username</p>
      </div>
      <div className="frontpageProfile_CoinContainer">
        <div className="frontpageProfile_CoinWrapper">
          {/* TODO: ADD ICON */}
          <img
            src="https://via.placeholder.com/50"
            alt="coin"
            className="frontpageProfile_CoinIcon"
          />
          <p className="frontpageProfile_CoinText">100</p>
        </div>
      </div>
    </div>
  );
};

export default frontpageProfile;
