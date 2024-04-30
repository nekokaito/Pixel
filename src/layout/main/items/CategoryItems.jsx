import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCardItem from "../../../components/cards/CategoryCardItem";
import { AuthContext } from "../../../provider/AuthProvider";
import { CircularProgress } from "@mui/joy";


const CategoryItems = () => {
    const { theme } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const { url } = useParams();
    const [items, setItems] = useState([]);
    const urlName = url.replace(/_/g, " ");

    useEffect(() => {
        document.title = `Pixel | ${urlName}`;
      }, []);

    useEffect(() => {
        fetch(`https://pixels-server.vercel.app/items/category/${url}`)
            .then(res => res.json())
            .then(data => {
                setItems(data);
                window.scrollTo(0, 0);
                setLoading(false)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [url]);

    return (
        <div className="m-10 md:m-auto">
            
            {loading ? ( <div className="flex justify-center items-center my-40">
                   
                   <CircularProgress color={theme === 'light'?  'danger' : 'neutral'} sx={{ '--CircularProgress-size': '80px' }}>
                   {
                       theme === 'light'? (<img className="w-10" src="/Pixel_Logo_fav.png"></img>) : (<img className="w-10" src="/Pixel_Logo_dark_fav.png"></img>)
                   }
</CircularProgress>
                   </div>
            ) : items.length === 0 ? (
                <div className={`mockup-window border min-h-screen my-10 ${theme === 'dark' ? 'bg-[#000000c3]' : 'bg-[#fffd]'}`}>
                    <div className="flex justify-center items-center h-[500px] px-4">
                        <h1 className="text-2xl md:text-4xl font-roboto font-bold">No Item is Added.</h1>
                    </div>
                </div>
            ) : (

                <div className={`mockup-window border min-h-screen my-10 ${theme === 'dark'? 'bg-[#000000c3]': 'bg-[#ffffff63]'}`}>
                <h1 className=" text-center text-3xl font-pixel">{`${urlName}.js`}</h1>
                
                <div className="grid lg:grid-cols-2 xl:grid-cols-4 justify-center p-10 gap-10">
                    {items.map(item => <CategoryCardItem key={item._id} item={item}></CategoryCardItem>)}
                </div>
                
                </div>
            )}
        </div>
    );
};

export default CategoryItems;
