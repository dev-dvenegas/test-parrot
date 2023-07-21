import apiClient from "../../../infrastructure/api/apiClient";
import { transformAllProducts } from "../../../infrastructure/transformers/tranformationServiceProductos";
import {
  ProductsResponse,
  UpdateProductRequest,
  UpdateProductResponse,
} from "../../models/products";

export const productsRepository = {
  getProducts: async (storeId: string): Promise<ProductsResponse> => {
    const response = await apiClient.get(`v1/products/?store=${storeId}`);
    return transformAllProducts(response.data);
  },
  updateProductAvailability: async (
    payload: UpdateProductRequest,
  ): Promise<UpdateProductResponse> => {
    const data = JSON.stringify({ availability: payload.availability });
    const response = await apiClient.put<UpdateProductResponse>(
      `v1/products/${payload.productId}/availability`,
      data,
    );
    return response.data;
  },
};
