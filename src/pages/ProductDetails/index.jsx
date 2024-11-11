import { Button, Rating, Tooltip } from "@mui/material";
import React, { useState } from 'react';
import { BsCartFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { Link } from "react-router-dom";
import { ProductZoom, QuantityBox, RelatedProducts } from '../../components';
import './style.css';

export const ProductDetails = () => {

  const [activeSize, setActiveSize] = useState(null);
  const [activeTabs, setActiveTabs] = useState(0);

  const isActive = index => {
    setActiveSize(index);
  }

  return (
    <>
      <section className='productDetails section'>
        <div className='container'>
          <div className='row'>
            <div className='w-100'>
              <ProductZoom />
            </div>

            <div className='w-100 mt-5'>
              <h2 className='hd text-capitalize'>Horizon Zero Dawn™ Complete Edition</h2>
              <ul className='list list-inline d-flex align-items-center'>
                <li className='list-inline-item'>
                  <div className='d-flex align-items-center'>
                    <span className='text-light mr-2'>Category : </span>
                    <span>Adventure</span>
                  </div>
                </li>
                <li className='list-inline-item'>
                  <div className="d-flex align-items-center">
                    <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
                    <span className="text-light cursor ml-2">1 리뷰</span>
                  </div>
                </li>
              </ul>
              <div className="d-flex info">
                <span className="oldPrice">₩73,639</span>
                <span className="netPrice text-danger ml-2">₩29,449</span>
              </div>
              <p className="mt-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, voluptates deserunt facere, alias dicta harum fugit officiis libero, pariatur quae placeat nobis soluta reprehenderit id. Ipsum ex ullam quasi obcaecati?
              </p>
              <div className="d-flex align-items-center mt-3">
                <QuantityBox />
                <Link to="/cart">
                  <Button className="btn-purple btn-lg btn-big btn-round">
                    <BsCartFill /> &nbsp; 카트에 담기
                  </Button>
                </Link>
                <Tooltip title="찜목록에 추가" placement="top">
                  <Button className="btn-purple btn-lg btn-big btn-circle ml-4">
                    <FaRegHeart />
                  </Button>
                </Tooltip>
                <Tooltip title="공유하기" placement="top">
                  <Button className="btn-purple btn-lg btn-big btn-circle ml-4">
                    <MdOutlineCompareArrows />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>

          <div className="card mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list list-inline-item">
                  <Button 
                    className={`${activeTabs === 0 && 'active'}`}
                    onClick={() => setActiveTabs(0)}>
                    제품 설명
                  </Button>
                </li>
                <li className="list list-inline-item">
                  <Button 
                    className={`${activeTabs === 1 && 'active'}`}
                    onClick={() => {
                      setActiveTabs(1)
                    }}>
                    리뷰 (1)
                  </Button>
                </li>
              </ul>
              <br />
              {activeTabs === 0 && <div className="tabContent">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veritatis voluptate facere, perspiciatis nihil impedit illo hic expedita accusamus. Id ex tenetur hic quisquam magnam magni dolor quam quod quas.</p></div>}
              {
                activeTabs === 1 &&
                <div className="tabContent">
                  <div className="row">
                    <div className="w-100">
                      <h3>사용자 후기</h3>
                      <br />
                      <div className="card p-4 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" alt="author" />
                          </div>
                          <span className="text-g d-block text-center font-weight-bold">무야호</span>
                        </div>
                        <div className="info pl-5">
                          <div className="d-flex align-items-center w-100">
                            <h5 className="text-light">01/03/1993</h5>
                            <div className="ml-auto">
                              <Rating namne="half-rating-read" value={4.5} precision={0.5} readOnly size="small" />
                            </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quos illum nostrum eum excepturi ut cum itaque earum. Cupiditate quod tempora expedita, exercitationem voluptate dolorum odio doloremque dolorem quidem distinctio?</p>
                        </div>
                      </div>
                      <br className="res-hide" />
                      <br className="res-hide" />
                    </div>
                    {/* <div className="sticky"> */}
                    </div>
                  </div>
                // </div>
              }
            </div>
          </div>

          <br />

          <RelatedProducts title="관련 상품" />
          <RelatedProducts title="최근에 본 상품" />
        </div>
      </section>
    </>
  )
}
