import { Route, Navigate, Routes } from "react-router-dom";
import { Login } from "../pages/public/Login";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />;
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
