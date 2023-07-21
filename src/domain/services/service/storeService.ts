import { StoreResponse } from "../../models/storeParrot";
import { storeRepository } from "../repositories/storeRepository";

export const storeService = {
  getStores: async (): Promise<StoreResponse> => {
    return await storeRepository.getStores();
  },
};
