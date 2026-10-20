import { useLoaderData } from "react-router-dom";
import Header from "./home/Header";
import MiniBanner from "../../components/banner/MiniBanner";
import ItemSection from "./home/ItemSection";
import SubSection from "./home/SubSection";
import { useEffect } from "react";
import ClientReview from "./home/ClientReview";
import State from "./home/State";


const Home = () => {
    const items = useLoaderData();
    
    useEffect(() => {
        document.title = "Pixel | Home";
      }, []);
      


    return (
        <div>
           <Header></Header> 
           <MiniBanner></MiniBanner>
          <ItemSection items={items}></ItemSection>
          <SubSection items={items}></SubSection>
          <ClientReview></ClientReview>
          <State></State>
        </div>
    );
};

export default Home;