import React, { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import { updateTokenFromCookies } from "../application/reducers/loginSlice";
import { useDispatch } from "react-redux";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const Main: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTokenFromCookies());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </ThemeProvider>
  );
};

export default Main;
