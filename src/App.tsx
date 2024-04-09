import "./App.scss";
import { observer } from "mobx-react-lite";
import { Routes as routes, navRoutes } from "./routes/routes";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./components/shared/navbar/navbar";
import { routeHasNavbar } from "./utils/RouteUtil";

const App = () => {
  const [renderNavbar, setRenderNavbar] = useState(true);

  const location = useLocation();

  useEffect(() => {
    handleRouteChange();
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
