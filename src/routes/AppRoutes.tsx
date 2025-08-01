import { Route, Navigate, Routes } from "react-router-dom";
import { Login } from "../pages/public/Login";
import { Overview } from "../pages/private/Overview";
import { Redaction } from "../pages/private/Redaction";
import { Resources } from "../pages/private/Resources";
import { Simulated } from "../pages/private/Simulated";
import { Timeline } from "../pages/private/Timeline";
import { Matter } from "../pages/private/matter";
import { PrivateLayout } from "../components/layout/PrivateLayout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />;
      <Route path="*" element={<Navigate to="/login" replace />} />
      {/* Rotas Privadas */}
      <Route element={<PrivateLayout />}>
        <Route path="/visao-geral" element={<Overview />} />
        <Route path="/cronograma" element={<Timeline />} />
        <Route path="/materias" element={<Matter />} />
        <Route path="/simulados" element={<Simulated />} />
        <Route path="/redacao" element={<Redaction />} />
        <Route path="/recursos" element={<Resources />} />
      </Route>
    </Routes>
  );
};
