import { useLoaderData } from "react-router-dom";
import Header from "./home/Header";
import MiniBanner from "../../components/banner/MiniBanner";
import ItemSection from "./home/ItemSection";
import SubSection from "./home/SubSection";
import { useEffect } from "react";
import Aos from "aos";
import ClientReview from "./home/ClientReview";


const Home = () => {
    
    const items = useLoaderData();
    
    useEffect(() => {
        document.title = "Pixel | Home";
      }, []);
      Aos.refresh()
    return (
        <div >
           <Header></Header> 
           <MiniBanner></MiniBanner>
          <ItemSection items={items}></ItemSection>
          <SubSection items={items}></SubSection>
          <ClientReview></ClientReview>
        </div>
    );
};

export default Home;