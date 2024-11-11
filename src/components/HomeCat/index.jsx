import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FPS, action, adventure, casual, horror, puzzle, rpg, sports, strategy, survival } from '../../assets';

export const HomeCat = () => {

  const [itemBg, setItemBg] = useState([
    '#fffceb',
    '#ecffec',
    '#feefea',
    '#fff3eb',
    '#fff3ff',
    '#f2fce4',
    '#feefea',
    '#fffceb',
    '#feefea',
    '#ecffec'
  ]);

  return (
    <section className="homeCat">
      <div className="container">
        <h3 className='mb-3 hd'>추천 카테고리</h3>
        <Swiper
          slidesPerView={10}
          spaceBetween={8}
          navigation={true}
          slidesPerGroup={3}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item text-center cursor" style={{background: "#feefea"}}>
              <img src={action} />
              <h6>액션</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center cursor" style={{background: "#ecffec"}}>
              <img src={rpg} />
              <h6>RPG</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center cursor" style={{background: "#feefea"}}>
              <img src={adventure} />
              <h6>어드벤처</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center cursor" style={{background: "#fff3eb"}}>
              <img src={FPS} />
              <h6>FPS</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center cursor" style={{background: "#fff3ff"}}>
              <img src={casual} />
              <h6>캐주얼</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center cursor" style={{background: "#f2fce4"}}>
              <img src={strategy} />
              <h6>전략</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center cursor" style={{background: "#feefea"}}>
              <img src={horror} />
              <h6>호러</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center cursor" style={{background: "#fffceb"}}>
              <img src={survival} />
              <h6>생존</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center cursor" style={{background: "#feefea"}}>
              <img src={puzzle} />
              <h6>퍼즐</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item text-center cursor" style={{background: "#ecffec"}}>
              <img src={sports} />
              <h6>스포츠</h6>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

  )
}
