import { useLoaderData, useParams } from "react-router-dom";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CiTimer } from "react-icons/ci";
import { GiPriceTag } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import { Rating, Typography } from "@mui/material";

const Details = () => {
    const {theme} =  useContext(AuthContext);
    const items = useLoaderData();
    const { _id } = useParams();
    const item = items.find(item => item._id == _id);
     
    const {photo_url, item_name,  customization, subcategory_Name, stockStatus,description, price, processing_time, rating} = item;

    return (
        <div className="p-4">
           <div >
            

            <div  className={`mockup-window border min-h-screen my-10 ${theme === 'dark'? 'bg-[#000000c3]': 'bg-[#fffd]'}`}>
              <div className="flex justify-around gap-8 flex-col items-center">
                <div className="p-10 md:w-1/2">
                    <img className="rounded-3xl" src={photo_url} alt={item_name} /></div>
                <div className="flex justify-center flex-col gap-3 md:p-8">
                 
                 <div className="flex flex-col justify-center lg:justify-start  gap-4 p-4">
                    <div className="flex justify-start gap-3">
                    <h1 className="text-3xl font-bold font-pixel">{item_name} </h1>  <div className={stockStatus === 'In stock'? `badge badge-accent badge-outline text-xs p-5`: `badge badge-secondary badge-outline text-xs p-5`}>{stockStatus}</div>
                    </div>
                    <Rating name="read-only" value={rating} readOnly />

                 </div>

                 <div className="grid justify-center items-center grid-cols-2 p-4 font-roboto">
                 <div className="flex items-center gap-2 text-xs  md:text-base"> <BiSolidCategoryAlt /> <span className=" font-semibold"> Category :</span> {subcategory_Name}</div>
    <div className="flex items-center gap-2 text-xs  md:text-base"> <MdOutlineDashboardCustomize /> <span className=" font-semibold">Customization :</span> {customization}</div>
   <div className="flex items-center gap-2 text-xs  md:text-base"> <CiTimer /><span className=" font-semibold">Area :</span>  {processing_time}</div>
   <div className="flex items-center gap-2 text-xs  md:text-base"><GiPriceTag /> <span className=" font-semibold">Price :</span>{price}৳  </div>
                 </div>
               <div className="p-4 font-roboto text-xs md:text-base">
                <p> {description}</p>
                

               </div>
    </div>
            
              </div>
</div>
        </div>
        </div>
    );
};

export default Details;