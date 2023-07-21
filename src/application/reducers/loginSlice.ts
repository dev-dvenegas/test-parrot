import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getTokensFromCookies,
  removeTokensFromCookies,
  saveTokensToCookies,
} from "../../infrastructure/cookies/tokenCookies";

interface LoginState {
  isLoggedIn: boolean;
}

const initialState: LoginState = {
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ access: string; refresh: string }>,
    ) => {
      const { access, refresh } = action.payload;
      saveTokensToCookies(access, refresh);
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      removeTokensFromCookies();
    },
    updateTokenFromCookies: (state) => {
      const { token } = getTokensFromCookies();
      // state.token = token || "";
      state.isLoggedIn = Boolean(token);
    },
    refreshToken: (
      state,
      action: PayloadAction<{ access: string; refresh: string }>,
    ) => {
      const { access, refresh } = action.payload;
      saveTokensToCookies(access, refresh);
      state.isLoggedIn = true;
    },
  },
});

export const { loginSuccess, logout, updateTokenFromCookies, refreshToken } =
  loginSlice.actions;
export default loginSlice.reducer;
