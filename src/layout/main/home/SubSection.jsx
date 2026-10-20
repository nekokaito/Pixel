import ItemCard from "../../../components/cards/ItemCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import CategoryCard from "../../../components/cards/CategoryCard";
import { cachedFetchJson, getApiUrl } from "../../../lib/apiCache";


const SubSection = ({items}) => {
    const {theme} = useContext(AuthContext)
    const [category, setCategory] = useState([]);

    useEffect(()=> {
        cachedFetchJson(getApiUrl('/category'), { ttl: 3600000 })
        .then(data => setCategory(data))
    }, [])

    return (
        <div className="my-36">
            <h1 className="text-center font-jersey  text-white font-bold text-2xl lg:text-5xl my-20">Categories</h1>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-center p-5 gap-10">
            {category.map(item => <CategoryCard key={item._id} item={item}></CategoryCard>)}
            </div>
            
             
        </div>
    );
};

export default SubSection;