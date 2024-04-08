import "./App.scss";
import { observer } from "mobx-react-lite";
import { Routes as routes, navRoutes } from "./routes/routes";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/shared/navbar/navbar";

const App = () => {
  return (
    <>
      <div className="Container">
        <div className="Wrapper">
          <Routes>
            {routes.map((route, index) => (
              <React.Fragment key={index}>
                <Route path={route.path} element={<route.component />} />
              </React.Fragment>
            ))}

            {routes.map(
              (route, index) =>
                route.children !== undefined &&
                route.children.map((child, childIndex) => (
                  <React.Fragment key={`${index}-${childIndex}`}>
                    <Route path={child.path} element={<child.component />} />
                  </React.Fragment>
                )),
            )}
          </Routes>
        </div>
        <Navbar routes={navRoutes} />
      </div>
    </>
  );
};

export default observer(App);
