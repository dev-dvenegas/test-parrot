import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import storeSlice from "./storeSlice";
import productSlice from "./productSlice";

const rootReducer = combineReducers({
  login: loginReducer,
  store: storeSlice,
  products: productSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
