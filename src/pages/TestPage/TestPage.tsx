import React from "react";
import "./TestPage.scss"
import Card from "../../components/shared/cards/card"
import Ticket from "../../assets/icons/ticket.svg"

const TestPage = () => {
  return <div className="test">
    <Card
    text="bob"
    icon={Ticket}
    link=""
    />
    <Card
    text="bob"
    icon={Ticket}
    link=""
    />
  </div>;
};

export default TestPage;
