import React from "react";
import Button from "../../components/shared/buttons/button";

const TestPage = () => {
  return <div>
    <Button
    text="bob"
    onClick={() => {console.log("bob");}}/>

  </div>;
};

export default TestPage;
