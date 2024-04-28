
import ItemCard from "../../../components/cards/ItemCard";

const ItemSection = ({items}) => {
    return (
        <div>
            <h1 className="text-center">Craft Items</h1>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-center p-5 gap-10">
            {items.map(item => <ItemCard key={item._id} item={item}></ItemCard>)}
            </div>
            
             
        </div>
    );
};

export default ItemSection;