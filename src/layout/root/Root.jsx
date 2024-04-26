import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

const Root = () => {
    return (
        <>
         <NavBar></NavBar>
           <div className="container mx-auto min-h-screen">
           <Outlet></Outlet>
           </div>
           
           <Footer></Footer>
         
        </>
    );
};

export default Root;