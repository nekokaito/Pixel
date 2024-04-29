import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
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



const MyCard = ({myItem, theme}) => {


      
    const {_id, item_name, subcategory_Name, price, photo_url, rating, customization, stockStatus} = myItem;

    const itemDelete = (id) => {
        console.log(id);
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
              fetch(`http://localhost:5000/items/${id}`, {
                method : 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
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