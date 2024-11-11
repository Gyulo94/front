import Button from "@mui/material/Button";
import React from "react";
// import { IoMailOutline } from "react-icons/io5";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { newsLetterImg } from "../../assets";
import { HomeBanner, HomeCat, ProductItem } from "../../components";
import "./style.css";


export const Home = () => {

  return (
    <>
      <HomeBanner />
      <HomeCat />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img src="https://directg.diskn.com/upload/banner/DG_Event_460x430_Bethesda_231128.jpg" className="cursor w-100" />
                </div>
                <div className="banner mt-4">
                  <img src="https://directg.diskn.com/upload/banner/Sega_header6_460x215.jpg" className="cursor w-100" />
                </div>
                <div className="banner mt-4">
                  <img src="https://directg.diskn.com/upload/banner/Neowiz_P_header_460x215.jpg" className="cursor w-100" />
                </div>
                <div className="banner mt-4">
                  <img src="https://directg.diskn.com/upload/banner/PlaystationPC_header_460x215.jpg" className="cursor w-100" />
                </div>
                <div className="banner mt-4">
                  <img src="https://directg.diskn.com/upload/banner/header_paradox.jpg" className="cursor w-100" />
                </div>
                <div className="banner mt-4">
                  <img src="https://directg.diskn.com/upload/banner/header_2K.jpg" className="cursor w-100" />
                </div>
                <div className="banner mt-4">
                  <img src="	https://directg.diskn.com/upload/banner/DG_header_460x215_gearbox.jpg" className="cursor w-100" />
                </div>
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">인기 상품</h3>
                </div>

                <Button className="viewAllBtn ml-auto">더 보기</Button>
              </div>

              <div className="product_row w-100 mt-4">
              <Swiper
                slidesPerView={4}
                spaceBetween={0}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductItem />
                </SwiperSlide>
                </Swiper>
              </div>

              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">신규 상품</h3>
                </div>

                <Button className="viewAllBtn ml-auto">더 보기</Button>
              </div>

              <div className="product_row productRow2 w-100 mt-4 d-flex">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>
              <div className="d-flex mt-4 mb-5 bannerSec">
                <div className="banner">
                  <img src="https://directg.diskn.com/upload/banner/DG_header_460x215_STALKER2.jpg" className="cursor w-100" />
                </div>
                <div className="banner">
                  <img src="https://directg.diskn.com/upload/banner/header_header_GRANBLUE_240228.jpg" className="cursor w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
    </>
  )
};
