import { AppThunk } from "../../application/store/appStore";
import { storeService } from "../../domain/services/service/storeService";
import { setStore } from "../../application/reducers/storeSlice";

export const storeAction = (): AppThunk => async (dispatch) => {
  try {
    const response = await storeService.getStores();
    const { username, stores } = response.result;
    dispatch(setStore({ userName: username, stores }));
  } catch (error) {
    // Manejo de errores
  }
};
