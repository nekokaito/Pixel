import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

const Root = () => {
    return (
        <>
           
           <NavBar></NavBar>
           <Outlet></Outlet>
           <Footer></Footer>
         
        </>
    );
};

export default Root;