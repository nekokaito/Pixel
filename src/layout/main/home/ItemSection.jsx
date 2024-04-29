import { Typewriter } from "react-simple-typewriter";
import ItemCard from "../../../components/cards/ItemCard";

const ItemSection = ({items}) => {
    return (
        <div className="my-36">
            <h1 className="text-center font-roboto font-bold text-2xl lg:text-5xl my-20">Craft {''} <span className=" text-red-500"><Typewriter
            words={['Items', 'Collections', 'and Your Treasures']}
            loop={4}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           /></span><br></br> </h1>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-center p-5 gap-10">
            {items.map(item => <ItemCard key={item._id} item={item}></ItemCard>)}
            </div>
            
             
        </div>
    );
};

export default ItemSection;