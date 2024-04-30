import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';

import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';

import Typography from '@mui/joy/Typography';
import { Rating } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';


const ReviewCard = ({key, name, review, image, rating}) => {

    const {theme} = useContext(AuthContext);
    return (
      
       <div  style={{ top: `calc(1rem * ${key + 1})` }} className={`sticky top w-full max-w-xl px-8 py-12 mx-auto space-y-4`}>
         <Card
        
        variant="outlined"
        sx={{
          width: 520,
          height: 250,
          // to make the card resizable
          overflow: 'none',
          resize: 'horizontal',
          backgroundColor: `${theme === 'dark'? '#000000d2': '#ffffff'}`, // Dark background color
                color: `${theme === 'light'? '#000': '#fff'}`,
                border: 'none',
                padding: '20px'
        }} 
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
        
          <Avatar src={image} size="lg" />
          <AvatarGroup size="sm" sx={{ '--Avatar-size': '28px' }}>
          <Rating name="read-only" value={rating} readOnly />
          </AvatarGroup>
        </Box>
        <CardContent>
          <h2 className={`${theme === 'light'? '#000': '#fff'} font-pixel text-2xl font-bold`}>{name}</h2>
          <p className={`${theme === 'light'? '#000': '#fff'} font-roboto font-extralight text-sm`}> {review}
          </p>
           
          
        </CardContent>
        
      </Card>
       </div>
  );};

export default ReviewCard;