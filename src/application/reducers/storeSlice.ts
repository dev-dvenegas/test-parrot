import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreParrot } from "../../domain/models/storeParrot";

interface StoreState {
  userName: string;
  stores: StoreParrot[];
}

const initialState: StoreState = {
  userName: "",
  stores: [],
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setStore: (state, action: PayloadAction<StoreState>) => {
      const { userName, stores } = action.payload;
      state.userName = userName;
      state.stores = stores;
    },
  },
});

export const { setStore } = storeSlice.actions;

export default storeSlice.reducer;
