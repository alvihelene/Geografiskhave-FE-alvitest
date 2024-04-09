
import ReactDOM from "react-dom/client";
import "./index.scss";
import { store, StoreContext } from "./stores/store";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Routes } from "./routes/routes.tsx";
import { transformRoutes } from "./utils/RouteUtil.ts";


const routes = Routes;

const router = createBrowserRouter(
  transformRoutes(routes),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreContext.Provider value={store}>
    <RouterProvider router={router} />
  </StoreContext.Provider>,
);
