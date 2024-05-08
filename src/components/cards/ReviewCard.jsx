import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';

import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';

import Aos from "aos";
import "aos/dist/aos.css";
import { Rating } from '@mui/material';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../provider/AuthProvider';


const ReviewCard = ({rev}) => {

  const {id, name, review, image, rating} = rev;
  

  useEffect(() => {
    Aos.init();
  }, []);

    const {theme} = useContext(AuthContext);
    return (
      
       <div  data-aos="fade-right" style={{ top: `calc(1rem * ${id + 1})` }} className={`sticky top w-full max-w-xl px-8 py-12 mx-auto space-y-4`}>
         <Card
        
        variant="outlined"
        sx={{
          width: {md: 520},
          height: {md: 250},
          
          overflow: 'none',
          resize: 'horizontal',
          backgroundColor: `${theme === 'dark'? '#000000': '#ffffff'}`, // Dark background color
                color: `${theme === 'light'? '#000': '#fff'}`,
                border: 'none',
                padding: '20px',
                
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
          <h2 className={`${theme === 'dark'? 'text-[#ff5cb8]': 'text-[#d45364]'} font-pixel text-2xl font-bold`}>{name}</h2>
          <p className={`${theme === 'light'? '#000': '#fff'} font-roboto font-extralight text-sm`}> {review}
          </p>
           
          
        </CardContent>
        
      </Card>
       </div>
  );};

export default ReviewCard;