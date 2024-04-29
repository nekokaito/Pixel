import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCardItem from "../../../components/cards/CategoryCardItem";


const CategoryItems = () => {

   const {url} = useParams()
const [items, setItems] = useState([]);
   console.log(url);
   useEffect(()=>{
    fetch(`http://localhost:5000/items/category/${url}`)
    .then (res => res.json())
    .then (data => {
        setItems(data)
        
    })
},[])


    return (
        <div>
           {
            items.map(item => <CategoryCardItem  key={item._id} item={item}></CategoryCardItem>)
           }
        </div>
    );
};

export default CategoryItems;