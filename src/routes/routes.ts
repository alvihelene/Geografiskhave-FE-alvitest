import { IRoute, RouteType } from "../interfaces/IRoute";
import HomePage from "../pages/HomePage";

export const Routes: IRoute[] = [
  {
    path: "/",
    title: "Home",
    component: HomePage,
    routeType: RouteType.NAVBAR,
  },
];
