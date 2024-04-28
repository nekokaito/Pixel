import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Typewriter } from 'react-simple-typewriter'


const Slider = () => {
    return (
        <div className="my-10">
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
      <SwiperSlide><img className="rounded-3xl" src="https://i.ibb.co/YZyWZpj/art1.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className="rounded-3xl" src="https://i.ibb.co/60zHzqQ/art2.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className="rounded-3xl" src="https://i.ibb.co/87SbZc1/art3.png" alt="" /></SwiperSlide>
    </Swiper>

   
        </div>
        
    );
};

export default Slider;