import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction, refreshTokenAction } from "./loginActions";
import { AppDispatch } from "../../application/store/appStore";
import { useCallback, useEffect } from "react";
import { RootState } from "../../application/reducers";
import {
  getTokensFromCookies,
  isTokenValid,
} from "../../infrastructure/cookies/tokenCookies";
import { logout } from "../../application/reducers/loginSlice";
const useLoginActions = () => {
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const isTokenValidNow = isTokenValid();

  const handleLogin = async (username: string, password: string) => {
    await dispatch(loginAction({ username, password }));
    navigate("/products");
  };

  const handleRefreshToken = useCallback(async () => {
    const { refreshToken } = getTokensFromCookies();
    await dispatch(refreshTokenAction({ refresh: refreshToken }));
    navigate("/products");
  }, [dispatch, navigate]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/products");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (isTokenValidNow) {
      handleRefreshToken();
      navigate("/products");
    }
  }, [handleRefreshToken, isTokenValidNow, navigate]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    handleLogout,
    handleLogin,
  };
};

export default useLoginActions;
