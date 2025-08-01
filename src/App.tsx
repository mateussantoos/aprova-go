import { AppRoutes } from "./routes/AppRoutes";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen font-rounded  ">
        <div className="flex flex-col min-h-screen">
          <main className="container mx-auto p-4 md:p-8 flex-grow">
            <AppRoutes />
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}
