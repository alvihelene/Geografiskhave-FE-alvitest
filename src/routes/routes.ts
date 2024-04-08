import { IRoute, RouteType } from "../interfaces/IRoute";
import HomePage from "../pages/HomePage/HomePage.tsx";
import home from "../assets/icons/home.svg";
import map from "../assets/icons/map.svg";
import profile from "../assets/icons/user.svg";
import TestPage from "../pages/TestPage/TestPage.tsx";
import placeholder from "../assets/icons/placeholder.svg";
import ProfilePage from "../pages/ProfilePage/ProfilePage.tsx";

export const Routes: IRoute[] = [
  {
    path: "/",
    title: "Hjem",
    icon: home,
    component: HomePage,
    routeType: RouteType.NAVBAR,
  },
  {
    path: "/map",
    title: "Find vej",
    icon: map,
    component: HomePage,
    routeType: RouteType.NAVBAR,
  },
  {
    path: "/placeholder",
    title: "Skattejagt",
    icon: placeholder,
    component: HomePage,
    routeType: RouteType.NAVBAR,
  },
  {
    path: "/profile",
    title: "Profil",
    icon: profile,
    component: ProfilePage,
    routeType: RouteType.NAVBAR,
  },
  //TODO: REMOVE THIS IN PRODUCTION
  {
    path: "/test",
    title: "Test",
    routeType: RouteType.INTERNAL,
    component: TestPage,
  },
];

export const navRoutes = Routes.filter(
  (route) => route.routeType === RouteType.NAVBAR,
);
