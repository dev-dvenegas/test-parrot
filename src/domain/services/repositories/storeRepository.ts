import { StoreResponse } from "../../models/storeParrot";
import apiClient from "../../../infrastructure/api/apiClient";

export const storeRepository = {
  getStores: async (): Promise<StoreResponse> => {
    const response = await apiClient.get<StoreResponse>("/v1/users/me");
    return response.data;
  },
};
