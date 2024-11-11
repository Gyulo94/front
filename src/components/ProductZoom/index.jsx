import React, { useRef, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

export const ProductZoom = () => {

  const zoomSliderBig = useRef()
  const zoomSlider = useRef()

  const [slideIndex, setSlideIndex] = useState(0);

  const goto = (index) => {
    setSlideIndex(index);
    zoomSlider.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  }


  return (
    <div className='projectZoom'>
      <div className="productZoom position-relative">
        <div className="badge badge-primary">23%</div>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={false}
          slidesPerGroup={1}
          modules={[Navigation]}
          className="zoomSliderBig"
          ref={zoomSliderBig}
          >
          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
              className='w-100'
                zoomType="hover" zoomScale={1}
                src={`https://image.api.playstation.com/vulcan/img/rnd/202009/3000/C14XMwZBi6CYKOacUDf6EzEs.jpg?w=780&thumb=false`}
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover" zoomScale={1}
                src={`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151640/ss_d09106060fb7de8bf342c23df18b14debc8a15a3.1920x1080.jpg?t=1729030787`}
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover" zoomScale={1}
                src={`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151640/ss_271f850eec3f96b22aa17be35b948268e0771c7f.1920x1080.jpg?t=1729030787`}
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover" zoomScale={1}
                src={`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151640/ss_15f5759c441e4e5f51e1a8ee333e4ab9df9aa783.1920x1080.jpg?t=1729030787`}
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover" zoomScale={1}
                src={`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151640/ss_f7cf51f1ccd909264f2c5814f328e3f72e7b62bd.1920x1080.jpg?t=1729030787`}
                />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover" zoomScale={1}
                src={`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151640/ss_9db45aa04e8c8b5043b479f42ed36296bfc3a918.1920x1080.jpg?t=1729030787`}
                />
            </div>
          </SwiperSlide>
        </Swiper>
    </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        navigation={true}
        slidesPerGroup={1}
        modules={[Navigation]}
        className="zoomSlider"
        ref={zoomSlider}
      >
        <SwiperSlide>
          <div className={`item ${slideIndex === 0 && 'item_active'}`}>
            <img src={`https://image.api.playstation.com/vulcan/img/rnd/202009/3000/C14XMwZBi6CYKOacUDf6EzEs.jpg?w=780&thumb=false`} className="w-100" onClick={() => goto(0)} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item ${slideIndex === 1 && 'item_active'}`}>
            <img src={`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151640/ss_d09106060fb7de8bf342c23df18b14debc8a15a3.1920x1080.jpg?t=1729030787`} className="w-100" onClick={() => goto(1)} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item ${slideIndex === 2 && 'item_active'}`}>
            <img src={`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151640/ss_271f850eec3f96b22aa17be35b948268e0771c7f.600x338.jpg?t=1729030787`} className="w-100" onClick={() => goto(2)} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item ${slideIndex === 3 && 'item_active'}`}>
            <img src={`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151640/ss_15f5759c441e4e5f51e1a8ee333e4ab9df9aa783.600x338.jpg?t=1729030787`} className="w-100" onClick={() => goto(3)} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item ${slideIndex === 4 && 'item_active'}`}>
            <img src={`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151640/ss_f7cf51f1ccd909264f2c5814f328e3f72e7b62bd.600x338.jpg?t=1729030787`} className="w-100" onClick={() => goto(4)} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item ${slideIndex === 5 && 'item_active'}`}>
            <img src={`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151640/ss_9db45aa04e8c8b5043b479f42ed36296bfc3a918.600x338.jpg?t=1729030787`} className="w-100" onClick={() => goto(5)} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
