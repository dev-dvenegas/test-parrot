import {
  LoginPayload,
  RefreshTokenPayload,
  TokenResponse,
} from "../../models/login";
import { authRepository } from "../repositories/authRepository";

export const authService = {
  login: async (payload: LoginPayload): Promise<TokenResponse> => {
    const data = JSON.stringify(payload);
    return await authRepository.login(data);
  },
  refreshToken: async (
    payload: RefreshTokenPayload,
  ): Promise<TokenResponse> => {
    const data = JSON.stringify(payload);
    return await authRepository.refreshToken(data);
  },
};
