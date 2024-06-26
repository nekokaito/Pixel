/* eslint-disable react/prop-types */
import { Typewriter } from "react-simple-typewriter";
import ItemCard from "../../../components/cards/ItemCard";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Aos from "aos";
import "aos/dist/aos.css";

const ItemSection = ({items}) => {
    
    const {theme} = useContext(AuthContext)

    useEffect(() => {
        Aos.init();
      }, []);

    return (
        <div data-aos="fade-up" className="my-36">
            <h1  className="text-center font-bold font-jersey  text-white text-2xl lg:text-5xl my-20">Craft {''} <span className={theme === 'dark'? 'text-[#ff5cb8]': 'text-[#d20723]'} ><Typewriter
            words={['Items', 'Collections', 'and Your Treasures']}
            loop={4}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           /></span><br></br> </h1>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-center p-10 gap-10">
            {items.slice(0, 6).map(item => <ItemCard key={item._id} item={item}></ItemCard>)}
            </div>
            
             
        </div>
    );
};

export default ItemSection;