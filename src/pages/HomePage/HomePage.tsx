import React from "react";
import { observer } from "mobx-react-lite";
import "./HomePage.scss";
import Profile from "../../components/profile/profile/profile";
const HomePage = () => {
  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      <Profile />
    </div>
  );
};

export default observer(HomePage);
