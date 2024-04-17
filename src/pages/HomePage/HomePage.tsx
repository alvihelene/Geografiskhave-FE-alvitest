import React from "react";
import { observer } from "mobx-react-lite";
import "./HomePage.scss";
import FrontpageProfile from "../../components/profile/frontpageProfile/frontpageProfile";
import TreasureHunt from "../../components/shared/treasureHuntHomePage/treasureHunt";

const HomePage = () => {
  return (
    <div className="HomePage">
      <FrontpageProfile/>
      <div className="frontpage_content">
        <TreasureHunt/>
        <div>
          <h2>Praktisk</h2>
        </div>
      </div>
    </div>
  );
};

export default observer(HomePage);
