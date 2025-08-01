import { NavBar } from "../ui/NavBar";
import { Outlet } from "react-router-dom";

export const PrivateLayout = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="md:pl-20 lg:pl-64 pb-24 md:pb-0 transition-all duration-300 ease-in-out flex-grow ">
        <div className="p-4 sm:p-6 lg:p-8 flex-grow">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
