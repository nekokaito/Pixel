import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
const ParticlesComponent = lazy(() => import("../../components/ParticlesComponent"));

const Root = () => {

  return (
    <>
      <div className="sticky top-0 z-20">
        <NavBar />
      </div>

      <Toaster position="top-center" />

      <div className="particles-layer" aria-hidden="true">
        <div className="particles-fallback" />
        <Suspense fallback={null}><ParticlesComponent id="particles" /></Suspense>
      </div>

      <main className="relative z-10 container mx-auto min-h-screen">
        <Outlet />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
};

export default Root;
