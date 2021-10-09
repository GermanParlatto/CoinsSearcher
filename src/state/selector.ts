import { RootState } from "./store";

export const recentlySearchedSelector = (state: RootState) =>
  state.coinsState.coinsRecentlySearch;

export const allCoinsSelector = (state: RootState) =>
  state.coinsState.allCoinsShort;
