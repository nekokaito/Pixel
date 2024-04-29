import { useLoaderData } from "react-router-dom";
import Table from "../../../components/table/Table";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const AllItems = () => {
    const items = useLoaderData();
    const {theme} =  useContext(AuthContext);
    useEffect(() => {
      document.title = "Pixel | All Item";
    }, []);
    return (
        <div data-aos="fade-right" className="m-10 ">
          <div className={`mockup-window border min-h-screen my-10 ${theme === 'dark'? 'bg-[#000000c3]': 'bg-[#fffd]'}`}>
          <h1 className=" text-center text-3xl font-pixel">AllItemList.js</h1>
  <div className="flex justify-center px-4 py-16"><Table items={items}></Table>  </div>
</div>
          
        </div>
    );
};

export default AllItems;