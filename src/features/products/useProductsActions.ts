import { AppDispatch } from "../../application/store/appStore";
import { useDispatch } from "react-redux";
import { productsActions, updateProductAvailability } from "./productsActions";
import { UpdateProductRequest } from "../../domain/models/products";

const useProductsActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  const getProducts = (storeId: string) => {
    dispatch(productsActions(storeId));
  };

  const handleUpdateProductAvailability = (
    productId: string,
    availability: string,
  ) => {
    const payload = {
      productId,
      availability: availability === "AVAILABLE" ? "UNAVAILABLE" : "AVAILABLE",
    } as UpdateProductRequest;
    dispatch(updateProductAvailability(payload));
  };

  return {
    getProducts,
    handleUpdateProductAvailability,
  };
};

export default useProductsActions;
