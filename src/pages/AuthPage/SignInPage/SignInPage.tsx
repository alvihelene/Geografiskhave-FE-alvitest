import "./SignInPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../../../stores/store";
import { useState } from "react";
import Input from "../../../components/shared/inputField/input";
import placeholder from "../../../assets/icons/placeholder.svg";

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authStore } = useStore();

  const handleSignIn = async () => {
    const user = {
      email: email,
      password: password,
    };

    await authStore.loginUser(user);
  };

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
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Adgangskode"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={placeholder}
          />
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
        <button className="SignIn_Interaction_Button" onClick={handleSignIn}>
          Log ind
        </button>
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
