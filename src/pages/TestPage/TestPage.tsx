import React from "react";
import Input from "../../components/shared/inputField/input";
import backIcon from "../../assets/icons/backIcon.svg";
import TreasureHunt from "../../components/shared/treasureHuntHomePage/treasureHunt";

const TestPage = () => {
  return (
    <div>
      <Input
        placeholder={"Password"}
        onChange={(e) => console.log(e.target.value)}
        icon={backIcon}
      />
      <TreasureHunt></TreasureHunt>
    </div>
  );
};

export default TestPage;
