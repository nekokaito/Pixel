import { useLoaderData } from "react-router-dom";
import Header from "./home/Header";

const Home = () => {

    const items = useLoaderData();
    return (
        <div>
           <Header></Header> 
           {items.length}
        </div>
    );
};

export default Home;