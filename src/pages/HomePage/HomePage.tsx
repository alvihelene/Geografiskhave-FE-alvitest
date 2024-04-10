import React from "react";
import { observer } from "mobx-react-lite";
import "./HomePage.scss";
import Splash from "../../components/spalsh/splashThing";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Splash></Splash>
      <h1>Home Page</h1>
    </div>
  );
};

export default observer(HomePage);
