import {
  ProductsResponse,
  UpdateProductResponse,
} from "../../domain/models/products";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  data: ProductsResponse;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  data: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateAvailability: (
      state,
      action: PayloadAction<UpdateProductResponse>,
    ) => {
      const { result } = action.payload;
      state.data.forEach((category) => {
        if (category.uuid === result.category.uuid) {
          const productIndex = category.products.findIndex(
            (p) => p.uuid === result.uuid,
          );
          if (productIndex !== -1) {
            category.products[productIndex] = result;
          }
        }
      });
    },
  },
});

export const { fetchStart, fetchSuccess, fetchError, updateAvailability } =
  productSlice.actions;

export default productSlice.reducer;
