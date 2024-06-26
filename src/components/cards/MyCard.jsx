import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import { FiEdit } from "react-icons/fi";
import Typography from '@mui/joy/Typography';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import Swal from 'sweetalert2';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const MyCard = ({myItem}) => {

  useEffect(() => {
    Aos.init();
  }, []);
      
    const {_id, item_name, subcategory_Name, price, photo_url, rating, customization, stockStatus} = myItem;

    const itemDelete = (id) => {
      const sound = new Audio ('pop-up.mp3');
      sound.play();
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://pixels-server.vercel.app/items/${id}`, {
                method : 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                
               if(data.deletedCount > 0 ) {
                
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  location.reload();
               }
              })
            }
          });
    }

    return (
        <div data-aos="zoom-in-up"  className='my-6'>
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
      
        <div className='flex justify-evenly w-full'>
            <Link to={`/update_item/${_id}`}>
            <button className='btn'><FiEdit /> Edit</button>
            </Link>
        
        <button onClick={() => itemDelete(_id)} className='btn border-none hover:bg-red-700'><MdDeleteForever /> Delete</button>
        </div>
        
      
    </Card>
        </div>
    );
};

export default MyCard;