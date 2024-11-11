import { Checkbox, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { Link } from 'react-router-dom';

export const Sidebar = () => {

  const [priceRange, setPriceRange] = useState([100, 60000]);
  const [value, setValue] = useState(0);

  return (
    <>
      <div className='sidebar'>
        <div className='sticky'>
          <div className="filterBox">
            <h6>게임 카테고리</h6>
            <div className='scroll'>
              <ul>
                <li>
                  <FormControlLabel className='w-100' control={<Checkbox />} label="액션" />
                </li>
                <li>
                  <FormControlLabel className='w-100' control={<Checkbox />} label="RPG" />
                </li>
                <li>
                  <FormControlLabel className='w-100' control={<Checkbox />} label="어드벤처" />
                </li>
                <li>
                  <FormControlLabel className='w-100' control={<Checkbox />} label="FPS" />
                </li>
                <li>
                  <FormControlLabel className='w-100' control={<Checkbox />} label="캐주얼" />
                </li>
                <li>
                  <FormControlLabel className='w-100' control={<Checkbox />} label="전략" />
                </li>
                <li>
                  <FormControlLabel className='w-100' control={<Checkbox />} label="호러" />
                </li>
                <li>
                  <FormControlLabel className='w-100' control={<Checkbox />} label="생존" />
                </li>
                <li>
                  <FormControlLabel className='w-100' control={<Checkbox />} label="퍼즐" />
                </li>
                <li>
                  <FormControlLabel className='w-100' control={<Checkbox />} label="스포츠" />
                </li>
              </ul>
            </div>
          </div>
          <div className='filterBox'>
            <h6>가격 범위</h6>
            <RangeSlider value={priceRange} onInput={setPriceRange} min={100} max={60000} step={5} />
            <div className='d-flex pt-2 pb-2 priceRange'>
              <span>From: <strong className='text-success'>₩{priceRange[0]}</strong></span>
              <span className='ml-auto'>To: <strong className='text-success'>₩{priceRange[1]}</strong></span>
            </div>
          </div>
          {/* <div className="filterBox">
            <h6>PRODUCT STATUS</h6>
            <div className='scroll'>
              <ul>
                <li>
                  <FormControlLabel className='w-100' control={<Checkbox />} label="In Stock" />
                </li>
                <li>
                  <FormControlLabel className='w-100' control={<Checkbox />} label="On Sale" />
                </li>
              </ul>
            </div>
          </div>
          <div className="filterBox">
            <h6>BRANDS</h6>
            <div className='scroll'>
              <ul>
                <li>
                  <FormControlLabel className='w-100' control={<Checkbox />} label="Frito Lay" />
                </li>
                <li>
                  <FormControlLabel className='w-100' control={<Checkbox />} label="Nespresso" />
                </li>
                <li>
                  <FormControlLabel className='w-100' control={<Checkbox />} label="Oreo" />
                </li>
                <li>
                  <FormControlLabel className='w-100' control={<Checkbox />} label="Quaker" />
                </li>
                <li>
                  <FormControlLabel className='w-100' control={<Checkbox />} label="Welch's" />
                </li>
              </ul>
            </div>
          </div> */}
          <Link to="#"><img src="https://directg.diskn.com/upload/banner/DG_Event_460x430_Bethesda_231128.jpg" className='w-100' /></Link>
        </div>
      </div>
    </>
  )
}
