import React from "react";
import "./SignUpPage.scss";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/auth");
  };

  return (
    <div className="SignUp">
      <div className="SignUp_Back" onClick={() => handleGoBack()}>
        &lt;-
      </div>
      <div className="SignUp_Container">
        <h1 className="SignUp_Container_Title">Tilmeld</h1>
        <p className="SignUp_Container_Paragraph">
          Velkommen til! Tilmeld dig for at begynde dit eventyr.
        </p>
        <form className="SignUp_Container_Form">
          <input
            type="text"
            className="SignUp_Container_Form_Input"
            placeholder="Fornavn"
          />
          <input
            type="email"
            className="SignUp_Container_Form_Input"
            placeholder="Email"
          />
          <input
            type="password"
            className="SignUp_Container_Form_Input"
            placeholder="Password"
          />
        </form>
      </div>
      <div className="SignUp_Interaction">
        <button className="SignUp_Interaction_Button">Tilmeld</button>
        <p className="SignUp_Interaction_Paragraph">
          Har du allerede en konto?
          <Link to="/login" className="SignUp_Interaction_Paragraph_Link">
            Log ind her
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
