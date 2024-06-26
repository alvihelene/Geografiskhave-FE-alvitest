import { createContext, useContext } from "react";
import { AuthStore } from "./userStore";

type Store = {
  authStore: AuthStore;
};

export const store: Store = {
  authStore: new AuthStore(),
};

export const StoreContext = createContext<Store>({} as Store);

export function useStore() {
  return useContext(StoreContext);
}
