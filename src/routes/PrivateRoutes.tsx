import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import type { ReactElement } from "react";

export const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center font-rounded text-xl font-bold text-duo-green">
        Carregando...
      </div>
    );
  }
  return user ? children : <Navigate to="/login" replace />;
};
