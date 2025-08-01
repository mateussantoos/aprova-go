import { AppRoutes } from "./routes/AppRoutes";
import { AuthProvider } from "./contexts/AuthContext";

export const App = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen font-rounded">
        <div className="flex flex-col min-h-screen w">
          <main className=" flex-grow ">
            <AppRoutes />
          </main>
        </div>
      </div>
    </AuthProvider>
  );
};
