import { authService } from "../../domain/services/service/authService";
import { AppThunk } from "../../application/store/appStore";
import {
  loginSuccess,
  refreshToken,
  fetchStart,
  fetchError,
} from "../../application/reducers/loginSlice";
import { LoginPayload, RefreshTokenPayload } from "../../domain/models/login";

export const loginAction =
  (payload: LoginPayload): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(fetchStart());
      const { access, refresh } = await authService.login(payload);
      dispatch(loginSuccess({ access, refresh }));
    } catch (err) {
      err.response.data.errors.map((error) => {
        dispatch(fetchError(error.message.toString()));
      });
    }
  };

export const refreshTokenAction =
  (payload: RefreshTokenPayload): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(fetchStart());
      const { access, refresh } = await authService.refreshToken(payload);
      dispatch(refreshToken({ access, refresh }));
    } catch (err) {
      err.response.data.errors.map((error) => {
        dispatch(fetchError(error.message.toString()));
      });
    }
  };
