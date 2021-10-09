/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICoinShort } from "../types/ICoinResult";
import { ICoinsState } from "./types";

const initialState: ICoinsState = {
  coinsRecentlySearch: [],
  allCoinsShort: [],
};

const slice = createSlice({
  name: "COINS",
  initialState,
  reducers: {
    addCoinSearched: (state, action: PayloadAction<ICoinShort>) => {
      state.coinsRecentlySearch.push(action.payload);
    },
    addAllCoins: (state, action: PayloadAction<ICoinShort[]>) => {
      state.allCoinsShort = action.payload;
    },
  },
});

/* ----- ACTIONS ----- */
export const { addCoinSearched, addAllCoins } = slice.actions;

/* ----- REDUCER ----- */
export const coinsState = slice.reducer;
