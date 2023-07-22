import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../application/store/appStore";
import { useEffect } from "react";
import { RootState } from "../../application/reducers";

import { storeAction } from "./storeActions";

const useStoreActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { stores } = useSelector((state: RootState) => state.store);

  useEffect(() => {
    const handleGetStores = async () => {
      await dispatch(storeAction());
    };
    handleGetStores();
  }, [dispatch]);

  return {
    stores,
  };
};

export default useStoreActions;
