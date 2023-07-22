import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../application/reducers";
import Login from "../ui/views/Login";
import MenuList from "../ui/views/MenuList";

const ProtectedRoute: React.FC<{
  redirectPath?: string;
  children: React.ReactNode;
}> = ({ redirectPath = "/", children }) => {
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route
        path="products"
        element={
          <ProtectedRoute>
            <MenuList />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
