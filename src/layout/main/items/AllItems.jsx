import { useLoaderData } from "react-router-dom";
import Table from "../../../components/table/Table";

const AllItems = () => {
    const items = useLoaderData();
    return (
        <div>
          <Table items={items}></Table>  
        </div>
    );
};

export default AllItems;