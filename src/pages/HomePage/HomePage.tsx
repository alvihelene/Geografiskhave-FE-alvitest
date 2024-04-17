import React from "react";
import { observer } from "mobx-react-lite";
import "./HomePage.scss";
import FrontpageProfile from "../../components/profile/frontpageProfile/frontpageProfile";
import TreasureHunt from "../../components/shared/treasureHuntHomePage/treasureHunt";

const HomePage = () => {
  return (
    <div className="HomePage">
      <FrontpageProfile/>
      <TreasureHunt/>
    </div>
  );
};

export default observer(HomePage);
