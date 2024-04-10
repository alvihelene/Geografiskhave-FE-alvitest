import React from "react";
import { observer } from "mobx-react-lite";
import "./HomePage.scss";
import FrontpageProfile from "../../components/profile/frontpageProfile/frontpageProfile";
import Header from "../../components/shared/header/header";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header currentPage="Hjem" />
      <FrontpageProfile />
    </div>
  );
};

export default observer(HomePage);
