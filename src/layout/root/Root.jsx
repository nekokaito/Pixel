import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import { Toaster } from "react-hot-toast";
import ParticlesComponent from "../../components/ParticlesComponent";

const Root = () => {
    return (
        <>
        <div className="sticky top-0 z-20">
        <NavBar></NavBar>
        </div>
         
         <Toaster></Toaster>
           <ParticlesComponent id="particles"></ParticlesComponent>
           <div className="relative z-10 container mx-auto min-h-screen">

           <Outlet></Outlet>
           </div>
           <div className="relative z-10">
           <Footer></Footer>
           </div>
           
         
        </>
    );
};

export default Root;