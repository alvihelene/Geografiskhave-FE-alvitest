import { ComponentType } from "react";

export interface IRoute {
  path: string;
  title: string;
  component: ComponentType;
  icon?: any;
  children?: IRoute[];
  isAuth?: boolean;
  routeType: RouteType;
}

export enum RouteType {
  NAVBAR = "navbar",
  DROPDOWN = "dropdown",
  INTERNAL = "internal",
}
