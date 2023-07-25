import { AppThunk } from "../../application/store/appStore";
import { storeService } from "../../domain/services/service/storeService";
import {
  storeSuccess,
  fetchStart,
  fetchError,
} from "../../application/reducers/storeSlice";

export const storeAction = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchStart());
    const response = await storeService.getStores();
    const { username, stores } = response.result;
    dispatch(storeSuccess({ userName: username, stores }));
  } catch (err) {
    err.response.data.errors.map((error) => {
      dispatch(fetchError(error.message.toString()));
    });
  }
};
