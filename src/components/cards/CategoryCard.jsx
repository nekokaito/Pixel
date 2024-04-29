import AspectRatio from '@mui/joy/AspectRatio';

import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';

import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const CategoryCard = ({item}) => {
    const {theme} = useContext(AuthContext);
    const {image, name} = item;
    const url = name.replace(/\s/g, "_");
    
    return (
 <Link to={`/category/${url}`}>
 <div>
            <Card className={`shadow-md transition duration-300  transform hover:animate-pulse hover:scale-95`}  sx={{ width: 420, bgcolor: `${theme === 'dark'? '#000000a0': '#fffd'}`, border: 'none' }}>
        <div className='font-pixel'>
            <h1 className={`${theme === 'dark'? 'text-white': 'text-black'} text-2xl `}>{name}</h1>
            
          
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
            src={image}
            srcSet={image}
            loading="lazy"
            alt={name}
          />
        </AspectRatio>
        <CardContent orientation="horizontal">
          
          
        </CardContent>
      </Card>
        </div>
 </Link>
        
    );
};

export default CategoryCard;