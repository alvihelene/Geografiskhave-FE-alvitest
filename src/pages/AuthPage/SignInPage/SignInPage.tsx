import React from "react";
import "./SignInPage.scss";
import { Link, useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/auth");
  };

  return (
    <div className="SignIn">
      <div className="SignIn_Back" onClick={() => handleGoBack()}>
        &lt;-
      </div>
      <div className="SignIn_Container">
        <h1 className="SignIn_Container_Welcome">Log ind</h1>
        <p className="SignIn_Container_Paragraph">
          Velkommen tilbage! Log ind for at forsætte med dit eventyr.{" "}
        </p>
        <div className="SignIn_Container_Form">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Adgangskode" />
          <div className="SignIn_Container_Form_Container">
            <div className="SignIn_Container_Form_Container_RememberMe">
              <input type="checkbox" id="checkbox" />
              <label for="checkbox">Husk mig</label>
            </div>
            <Link to="#" className="SignIn_Container_Form_Container_Forgot">
              Glemt adgangskode?
            </Link>
          </div>
        </div>
      </div>

      <div className="SignIn_Interaction">
        <button className="SignIn_Interaction_Button">Log ind</button>
        <p className="SignIn_Interaction_Paragraph">
          Har du ikke en konto?
          <Link to="/register" className="SignIn_Interaction_Paragraph_Link">
            Tilmeld dig her
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
