import "./App.scss";
import { observer } from "mobx-react-lite";
import { navRoutes } from "./routes/routes";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./components/shared/navbar/navbar";
import { routeHasNavbar } from "./utils/RouteUtil";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const App = () => {
  const [renderNavbar, setRenderNavbar] = useState(true);
  const auth = getAuth();
  const location = useLocation();
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (
        location.pathname === "/auth" ||
        location.pathname === "/login" ||
        location.pathname === "/register"
      ) {
        navigate("/");
      }
    }
  });

  useEffect(() => {
    handleRouteChange();
    console.log("location changed");
  }, [location]);

  const handleRouteChange = () => {
    const currentPath = location.pathname;
    setRenderNavbar(routeHasNavbar(currentPath));
  };
  return (
    <>
      <div className="Container">
        <div className="Wrapper">
          <Outlet />
        </div>
        {renderNavbar && <Navbar routes={navRoutes} />}
      </div>
    </>
  );
};

export default observer(App);
