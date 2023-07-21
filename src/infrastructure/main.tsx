import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import { updateTokenFromCookies } from "../application/reducers/loginSlice";
import { useDispatch } from "react-redux";

const Main: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTokenFromCookies());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default Main;
