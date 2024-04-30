import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <>
        <div className="sticky top-0 z-10">
        <NavBar></NavBar>
        </div>
         
         <Toaster></Toaster>
        
           <div className="container mx-auto min-h-screen">

           <Outlet></Outlet>
           </div>
           
           <Footer></Footer>
         
        </>
    );
};

export default Root;