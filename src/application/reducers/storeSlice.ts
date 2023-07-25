import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreParrot } from "../../domain/models/storeParrot";

interface StoreState {
  userName: string;
  stores: StoreParrot[];
  loading?: boolean;
  error?: string | null;
}

const initialState: StoreState = {
  userName: "",
  stores: [],
  loading: false,
  error: null,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    storeSuccess: (state, action: PayloadAction<StoreState>) => {
      const { userName, stores } = action.payload;
      state.loading = false;
      state.userName = userName;
      state.stores = stores;
    },
    fetchError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { storeSuccess, fetchStart, fetchError } = storeSlice.actions;

export default storeSlice.reducer;
