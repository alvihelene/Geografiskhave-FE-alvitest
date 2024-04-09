import { Routes as routes } from "../routes/routes";
import { IRoute, RouteType } from "../interfaces/IRoute";

export const routeHasNavbar = (route: string) => {
  const lookedUpRoute = routes.find((r: IRoute) => r.path === route) || routes[0].children?.find((r: IRoute) => r.path === route);

  if (!lookedUpRoute) {
    return false;
  }

  return lookedUpRoute.routeType !== RouteType.AUTH;
};

export const transformRoutes = (routes: IRoute[]) => {
  return routes.map((route: IRoute) => {
    if (route.children) {
      return {
        path: route.path,
        element: route.component,
        children: route.children.map((child) => {
          if (child.children) {
            return {
              path: child.path,
              element: child.component,
              children: child.children.map((grandChild) => {
                return {
                  path: child.path + grandChild.path,
                  element: grandChild.component,
                };
              }),
            };
          } else {
            return {
              path:  child.path,
              element: child.component,
            };
          }
        }),
      };
    }
    return {
      path: route.path,
      element: route.component,
    };
  });
};
