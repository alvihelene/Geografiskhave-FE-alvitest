import React from "react";
import { observer } from "mobx-react-lite";
import "./HomePage.scss";

import Button from "../../components/shared/buttons/button";

const HomePage = () => {
  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      <Button 
      text="kanp"
      size="small"
      color="white"
      />
      <Button 
      text="button"
      size="large"
      color="orange"
      />
    </div>
  );
};

export default observer(HomePage);
