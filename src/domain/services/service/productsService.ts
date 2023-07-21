import { productsRepository } from "../repositories/productsRepository";
import {
  ProductsResponse,
  UpdateProductRequest,
  UpdateProductResponse,
} from "../../models/products";

export const productsService = {
  getProducts: async (storeId: string): Promise<ProductsResponse> => {
    return await productsRepository.getProducts(storeId);
  },
  updateProductAvailability: async (
    payload: UpdateProductRequest,
  ): Promise<UpdateProductResponse> => {
    return await productsRepository.updateProductAvailability(payload);
  },
};
