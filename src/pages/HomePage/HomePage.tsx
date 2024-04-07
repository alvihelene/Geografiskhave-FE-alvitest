import React from "react";
import { observer } from "mobx-react-lite";
import "./HomePage.scss";
import FrontpageProfile from "../../components/profile/frontpageProfile/frontpageProfile";

const HomePage = () => {
  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      <FrontpageProfile />
    </div>
  );
};

export default observer(HomePage);
