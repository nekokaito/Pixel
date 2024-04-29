import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <>
         <NavBar></NavBar>
         <Toaster></Toaster>
           <div className="container mx-auto min-h-screen">
           <Outlet></Outlet>
           </div>
           
           <Footer></Footer>
         
        </>
    );
};

export default Root;