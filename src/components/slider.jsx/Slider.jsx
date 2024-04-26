import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Typewriter } from 'react-simple-typewriter'


const Slider = () => {
    return (
        <div className="relative">
            <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className="rounded-3xl" src="https://i.ibb.co/gD2vrg2/pic1-edit.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="rounded-3xl" src="https://i.ibb.co/vVLCSpC/pic2-edit.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="rounded-3xl" src="https://i.ibb.co/HDGv7Kz/pic3-edit.jpg" alt="" /></SwiperSlide>
    </Swiper>

    <div className="absolute rounded-2xl bg-[#0000007d] top-5 md:top-28 left-10 z-10 p-4">
        <div className='flex justify-center items-center flex-col gap-5'>
        <h1 className='text-7xl text-white font-bold font-jersey'>We are Serving {''}<span className=" text-red-500"><Typewriter
            words={['50K', '100K', '150K', '200K', '250K', '300K']}
            loop={10}
            cursor
            cursorStyle='+'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           /></span><br></br></h1>
<p className='text-5xl text-white font-bold font-jersey'>Clients All Over</p>
        <h2 className=' text-8xl text-white font-bold font-jersey'>B<span className='text-red-500'>a</span>ngla<span className='text-green-700'>desh</span></h2>
        <div className='w-1/2 '>
        <p className='font-pixel text-white p-4'>Unleash your creativity with our premium Painting and Drawing set!  Dive into a world of vibrant colors and endless possibilities with our high-quality paints, brushes, and sketching tools.</p>
        </div>

        </div>
        
       
      
      </div>
        </div>
        
    );
};

export default Slider;