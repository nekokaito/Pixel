import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';



const MyCard = () => {
    return (
        <div className='my-6'>
       <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">Bluetooth Headset</Typography>
        <Link
          href="#product-card"
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
          
        >
          Super Rockez A400
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: 'xl' }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          2,900 THB
        </Typography>
        <Typography level="body-sm">
          (Only <b>7</b> left in stock!)
        </Typography>
      </CardContent>
      
        <div className='flex justify-evenly w-full'>
        <button className='btn'>H</button>
        <button className='btn'>B</button>
        </div>
        
      
    </Card>
        </div>
    );
};

export default MyCard;