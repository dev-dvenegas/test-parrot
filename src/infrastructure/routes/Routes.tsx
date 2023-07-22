import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../application/reducers";
import Login from "../ui/views/Login";
import MenuList from "../ui/views/MenuList";

const PageNotFound: React.FC = () => {
  return (
    <div>
      <h2>404 Page not found</h2>
    </div>
  );
};

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
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
