import { useLoaderData } from "react-router-dom";
import Table from "../../../components/table/Table";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const AllItems = () => {
    const items = useLoaderData();
    const {theme} =  useContext(AuthContext);
    return (
        <div>
          <div className={`mockup-window border min-h-screen my-10 ${theme === 'dark'? 'bg-[#000000c3]': 'bg-[#fffd]'}`}>
  <div className="flex justify-center px-4 py-16"><Table items={items}></Table>  </div>
</div>
          
        </div>
    );
};

export default AllItems;