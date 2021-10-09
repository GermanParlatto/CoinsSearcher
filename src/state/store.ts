import { configureStore } from "@reduxjs/toolkit";
import { coinsState } from "./slice";
import { ICoinsState } from "./types";

//* Root STATE */
export type RootState = {
  coinsState: ICoinsState;
};

const isDevelopentMode = process.env.NODE_ENV === "development";

//* Main STORE */
export const store = configureStore({
  reducer: {
    coinsState,
  },
  devTools: isDevelopentMode,
});
