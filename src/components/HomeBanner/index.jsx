import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const HomeBanner = () => {

  return (
    <div className='container mt-3'>
      <div className='homeBannerSection'>
        <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={0}
            loop={true}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
          <SwiperSlide>
            <div className='item'>
              <img src="https://cdn.cdkeys.com/media/wysiwyg/Home_Page_Slider/Call-of-Duty/Website_956x528_EN.png" alt="" className='w-100' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item'>
              <img src="https://cdn.cdkeys.com/media/wysiwyg/Home_Page_Slider/Farming-Simulator/Website_956x528_EN.png" alt="" className='w-100' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item'>
              <img src="https://cdn.cdkeys.com/media/wysiwyg/Home_Page_Slider/Flight-Simulator/Website_956x528_EN.png" alt="" className='w-100' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item'>
              <img src="	https://cdn.cdkeys.com/media/wysiwyg/Home_Page_Slider/Chornobyl/Website_956x528_EN.png" alt="" className='w-100' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item'>
              <img src="	https://cdn.cdkeys.com/media/wysiwyg/Home_Page_Slider/Dragon-Ball/Website_956x528_EN.png" alt="" className='w-100' />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
