import { useLoaderData } from "react-router-dom";
import Header from "./home/Header";
import MiniBanner from "../../components/banner/MiniBanner";
import ItemSection from "./home/ItemSection";
import SubSection from "./home/SubSection";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ClientReview from "./home/ClientReview";
import State from "./home/State";


const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
    const items = useLoaderData();
    
    useEffect(() => {
        document.title = "Pixel | Home";
      }, []);
      


    return (
        <div data-aos="fade-right">
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