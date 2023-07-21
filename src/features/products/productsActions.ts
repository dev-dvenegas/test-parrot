import { AppThunk } from "../../application/store/appStore";
import { productsService } from "../../domain/services/service/productsService";
import {
  fetchError,
  fetchStart,
  fetchSuccess,
  updateAvailability,
} from "../../application/reducers/productSlice";
import { UpdateProductRequest } from "../../domain/models/products";

export const productsActions =
  (storeId: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(fetchStart());
      const response = await productsService.getProducts(storeId);
      dispatch(fetchSuccess(response));
    } catch (err) {
      dispatch(fetchError(err.toString()));
    }
  };

export const updateProductAvailability =
  (payload: UpdateProductRequest): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(fetchStart());
      const updatedProduct = await productsService.updateProductAvailability(
        payload,
      );
      dispatch(updateAvailability(updatedProduct));
    } catch (err) {
      dispatch(fetchError(err.toString()));
    }
  };
