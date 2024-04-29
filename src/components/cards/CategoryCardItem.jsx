import AspectRatio from '@mui/joy/AspectRatio';

import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import { FiEdit } from "react-icons/fi";
import Typography from '@mui/joy/Typography';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CiViewList } from "react-icons/ci";

const CategoryCardItem = ({item}) => {
    const {_id, item_name, subcategory_Name, price, photo_url, rating, customization, stockStatus} = item;
    
    return (
        <div className='my-6'>
        <Card color="neutral" variant="soft" className="shadow-md transition duration-300 bg-black  transform  hover:scale-95" sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg'}}>
       <CardOverflow>
         <AspectRatio sx={{ minWidth: 200 }}>
           <img
             src={photo_url}
             srcSet={photo_url}
             loading="lazy"
             alt=""
           />
         </AspectRatio>
       </CardOverflow>
       <CardContent>
         <Typography level="body-xs"> <span className='font-roboto'>{subcategory_Name}</span></Typography>
        
     <Link to={`/${_id}`}> <span className='font-roboto font-bold'>{item_name}</span></Link>
     <div>
     <div className="flex items-center gap-2 text-xs font-thin md:text-base"> <MdOutlineDashboardCustomize size={11}/> <span className=" font-semibold"> <small>Customization :</small></span> <small className='font-pixel'>{customization}</small></div>
     </div>
       
           
         
 
         <Typography
           level="title-lg"
           sx={{ mt: 1, fontWeight: 'xl' }}
           endDecorator={
             <Chip component="span" size="sm" variant="soft" color={stockStatus === 'In stock'? 'success' : 'danger'}>
               {stockStatus}
             </Chip>
           }
         >
           {price}৳
         </Typography>
         <Typography level="body-sm">
         <Rating name="read-only" value={rating} readOnly />
         </Typography>
       </CardContent>
       
         <div className=''>
             <Link to={`/${_id}`}>
             <button className='btn'><CiViewList /> View Details</button>
             </Link>
         
         
         </div>
         
       
     </Card>
         </div>
    );
};

export default CategoryCardItem;