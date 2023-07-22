import React, { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import { updateTokenFromCookies } from "../application/reducers/loginSlice";
import { useDispatch } from "react-redux";

const Main: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTokenFromCookies());
  }, [dispatch]);

  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
};

export default Main;
