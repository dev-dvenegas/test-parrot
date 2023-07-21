import apiClient from "../../../infrastructure/api/apiClient";
import { TokenResponse } from "../../models/login";

export const authRepository = {
  login: async (data: string): Promise<TokenResponse> => {
    const response = await apiClient.post<TokenResponse>("/auth/token", data);
    return response.data;
  },
  refreshToken: async (data: string): Promise<TokenResponse> => {
    const response = await apiClient.post<TokenResponse>(
      "/auth/token/refresh",
      data,
    );
    return response.data;
  },
};
