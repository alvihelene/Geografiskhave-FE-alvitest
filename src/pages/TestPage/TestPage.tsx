import React from "react";
import "./TestPage.scss"
import Card from "../../components/shared/cards/card"
import Button from "../../components/shared/buttons/button";
import icon  from "../../assets/icons/placeholder.svg"

const TestPage = () => {
  return <div>
    <div className="test">
      <Card
      text="bob"
      icon={icon}
      link="https://www.w3schools.com/html/html_links.asp"/>
      <Card
      text="tob"
      icon={icon}
      link=""/>
    </div>
    
  </div>;
};

export default TestPage;
