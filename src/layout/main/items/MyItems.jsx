import { useContext, useEffect, useState } from "react";
import MyCard from "../../../components/cards/MyCard";
import { AuthContext } from "../../../provider/AuthProvider";
import { CircularProgress } from "@mui/joy";



const MyItems = () => {

    const {user, theme} = useContext(AuthContext) || {};

    const [myItems, setMyItems] = useState([]);
    const [filter, setFilter] = useState("All");
    const [loading, setLoading] = useState(true); 

    useEffect(()=>{
        fetch(`https://pixels-server.vercel.app/items/email/${user?.email}`)
        .then (res => res.json())
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
        <div data-aos="fade-left" className="m-10 md:m-auto">
            {
                   loading? ( <div className="flex justify-center items-center my-40">
                   
                    <CircularProgress color={theme === 'light'?  'danger' : 'neutral'} sx={{ '--CircularProgress-size': '80px' }}>
                    {
                        theme === 'light'? (<img className="w-10" src="/Pixel_Logo_fav.png"></img>) : (<img className="w-10" src="/Pixel_Logo_dark_fav.png"></img>)
                    }
</CircularProgress>
                    </div>
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
                   <div className="flex justify-center items-center h-[500px] px-4">
                    
                   <div className="grid lg:grid-cols-2 xl:grid-cols-4 justify-center p-5 gap-10">



{
    filterItems().map(myItem => <MyCard key={myItem._id} myItem={myItem}></MyCard>)
}




</div>

                   </div>
                 </div>
                 
                 
                 
                )

            }
           

            
           
            
        </div>
    );
};

export default MyItems;