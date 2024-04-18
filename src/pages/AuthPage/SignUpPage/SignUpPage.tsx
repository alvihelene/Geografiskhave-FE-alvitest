import React, { useState } from "react";
import "./SignUpPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../../../stores/store";
import { IUserFirebase } from "../../../interfaces/IUser";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { authStore } = useStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoBack = () => {
    navigate("/auth");
  };

  const handleSignUp = () => {
    const user: IUserFirebase = {
      name: name,
      email: email,
      password: password,
    };

    authStore.registerUser(user);
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
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="SignUp_Container_Form_Input"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="SignUp_Container_Form_Input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </div>
      <div className="SignUp_Interaction">
        <button className="SignUp_Interaction_Button" onClick={handleSignUp}>
          Tilmeld
        </button>
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
