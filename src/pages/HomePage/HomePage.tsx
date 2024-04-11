import React from "react";
import { observer } from "mobx-react-lite";
import "./HomePage.scss";
import Splash from "../../components/spalsh/splashThing";

const HomePage = () => {
  return (
    <div className="HomePage">
      <h1>Home Page</h1>
    </div>
  );
};

export default observer(HomePage);
