import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';


const ItemCard = ({item}) => {
   
    const {theme} = useContext(AuthContext);
    const {_id, item_name, subcategory_Name, price, photo_url} = item
    return (
        <Card className={`shadow-md transition duration-300  transform hover:animate-pulse hover:scale-95`}  sx={{ width: 420, bgcolor: `${theme === 'dark'? '#000000a0': '#fffd'}`, border: 'none' }}>
        <div className='font-pixel'>
            <h1 className={`${theme === 'dark'? 'text-white': 'text-black'} text-2xl `}>{item_name}</h1>
            <p className={`${theme === 'dark'? 'text-white': 'text-black'} text-sm`}>{subcategory_Name}</p>
          
          <IconButton
            aria-label="bookmark Bahamas Islands"
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
          >
            
          </IconButton>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img
            src={photo_url}
            srcSet={photo_url}
            loading="lazy"
            alt={item_name}
          />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <div>
          <h3 className={`${theme === 'dark'? 'text-white': 'text-black'} font-roboto`}>{price}৳</h3>
            
          </div>
        
          <div className=' ml-auto'><Link to={`/${_id}`}> <button className='btn font-pixel'> View Details</button></Link></div>
          
        </CardContent>
      </Card>
    );
};

export default ItemCard;