import { Button, Menu, MenuItem, Pagination } from '@mui/material'
import React, { useState } from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import { FaAngleDown } from 'react-icons/fa6'
import { HiViewGrid } from 'react-icons/hi'
import { TfiLayoutGrid4Alt } from 'react-icons/tfi'
import { ProductItem, Sidebar } from '../../components'
import './style.css'

export const Listing = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setProductView] = useState('four');
  const openDropdown = Boolean(anchorEl);
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <section className='product_Listing_Page'>
        <div className='container'>
          <div className='productListing d-flex'>
            <Sidebar />

            <div className='content_right'>
              <img src="https://icoda.io/wp-content/uploads/2023/08/game1-2-2-3.png" className='w-100' style={{borderRadius: '8px'}} />

              <div className="showBy mt-3 mb-3 d-flex align-items-center">
                <div className='d-flex align-items-center btnWrapper'>
                  <Button className={productView === 'two' && 'act'} onClick={() => setProductView('two')}><HiViewGrid /></Button>
                  <Button className={productView === 'three' && 'act'} onClick={() => setProductView('three')}><CgMenuGridR /></Button>
                  <Button className={productView === 'four' && 'act'} onClick={() => setProductView('four')}><TfiLayoutGrid4Alt /></Button>
                </div>

                <div className='ml-auto showByFilter'>
                  <Button onClick={handleClick} >Show 9 <FaAngleDown /></Button>
                  <Menu
                    className='w-100 showPerPageDropdown'
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openDropdown}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                    >
                      <MenuItem onClick={handleClose}>10</MenuItem>
                      <MenuItem onClick={handleClose}>20</MenuItem>
                      <MenuItem onClick={handleClose}>30</MenuItem>
                      <MenuItem onClick={handleClose}>40</MenuItem>
                      <MenuItem onClick={handleClose}>50</MenuItem>
                      <MenuItem onClick={handleClose}>60</MenuItem>
                    </Menu>
                </div>
              </div>

              <div className='productListing'>
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
              </div>

              <div className='d-flex align-items-center justify-content-center mt-5'>
                <Pagination count={10} color='primary' size='large' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
