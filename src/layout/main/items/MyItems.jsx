import { useContext, useEffect, useState } from "react";
import MyCard from "../../../components/cards/MyCard";
import { AuthContext } from "../../../provider/AuthProvider";
import { cachedFetchJson, getApiUrl } from "../../../lib/apiCache";
import LoadingSpinner from "../../../components/LoadingSpinner";



const MyItems = () => {

    const {user, theme} = useContext(AuthContext) || {};

    const [myItems, setMyItems] = useState([]);
    const [filter, setFilter] = useState("All");
    const [loading, setLoading] = useState(true); 

    useEffect(()=>{
        cachedFetchJson(getApiUrl(`/items/email/${encodeURIComponent(user?.email ?? "")}`), { ttl: 20000 })
        .then (data => {
            
            setMyItems(data);
            setLoading(false);
        })
    },[])
    const filterItems = () => {
        if (filter === 'All') {
            return myItems; 
        }
        return myItems.filter(item => item.customization === filter);
    };
    return (
        <div className="mx-2 md:m-auto">
            {
                   loading ? (
                    <LoadingSpinner theme={theme} />
                   ) :  myItems.length === 0 ? (<div className={`mockup-window border min-h-screen my-10 ${theme === 'dark'? 'bg-[#000000c3]': 'bg-[#fffd]'}`}>
                   <div className="flex justify-center items-center h-[500px] px-4"> <h1 className="text-2xl md:text-4xl font-roboto font-bold">No Item is Added By You.</h1></div>
                 </div>) : (
                 
                 <div className={`mockup-window border min-h-screen my-10 ${theme === 'dark'? 'bg-[#000000c3]': 'bg-[#ffffff63]'}`}>
                    <h1 className=" text-center text-3xl font-pixel">MyItem.js</h1>
                    <div className="flex justify-center items-center my-5">
                    <select value={filter} onChange={e => setFilter(e.target.value)} className="select w-full max-w-xs">
  <option disabled selected>Customization</option>
  <option>All</option>
  <option>Yes</option>
  <option>No</option>
  </select>
                    </div>
                   
                    
                   <div className="grid lg:grid-cols-2 xl:grid-cols-4 justify-center p-10 gap-10">



{
    filterItems().map(myItem => (
        <MyCard
            key={myItem._id}
            myItem={myItem}
            onDeleted={(id) => setMyItems((current) => current.filter((item) => item._id !== id))}
        />
    ))
}






                   </div>
                 </div>
                 
                 
                 
                )

            }
           

            
           
            
        </div>
    );
};

export default MyItems;