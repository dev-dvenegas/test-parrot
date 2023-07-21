import { authService } from "../../domain/services/service/authService";
import { AppThunk } from "../../application/store/appStore";
import {
  loginSuccess,
  refreshToken,
} from "../../application/reducers/loginSlice";
import { LoginPayload, RefreshTokenPayload } from "../../domain/models/login";

export const loginAction =
  (payload: LoginPayload): AppThunk =>
  async (dispatch) => {
    try {
      const { access, refresh } = await authService.login(payload);
      dispatch(loginSuccess({ access, refresh }));
    } catch (error) {
      // Manejo de errores
    }
  };

export const refreshTokenAction =
  (payload: RefreshTokenPayload): AppThunk =>
  async (dispatch) => {
    try {
      const { access, refresh } = await authService.refreshToken(payload);
      dispatch(refreshToken({ access, refresh }));
    } catch (error) {
      // Manejo de errores
    }
  };
