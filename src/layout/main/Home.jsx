import { useLoaderData } from "react-router-dom";
import Header from "./home/Header";
import MiniBanner from "../../components/banner/MiniBanner";


const Home = () => {

    const items = useLoaderData();
    return (
        <div>
           <Header></Header> 
           <MiniBanner></MiniBanner>
          
        </div>
    );
};

export default Home;