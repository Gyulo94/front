import { Button, Rating } from '@mui/material';
import React from 'react';
import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { QuantityBox, RelatedProducts } from '../../components';
import './style.css';

export const Cart = () => {
  return (
    <>
      <section className='section cartPage'>
        <div className='container'>
          <h2 className='hd mb-1'>장바구니</h2>
          <p><b className='text-red'>1</b> 개의 상품이 있습니다.</p>
          <div className='row'>
            <div className='col-md-12 pr-5'>
              <div className='table-responsive'>
                <table className='table scroll'>
                  <thead>
                    <tr>
                      <th width="35%">주문 목록</th>
                      <th width="15%"></th>
                      <th width="25%"></th>
                      <th width="15%"></th>
                      <th width="10%"></th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    <tr>
                      <td width="35%">
                          <div className='d-flex align-items-center cartItemImgWrapper'>
                            <div className="imgWrapper">
                              <img src="https://cdn.cdkeys.com/700x700/media/catalog/product/n/e/new_project_3__3.jpg" className='w-100' />
                            </div>
                            <div className="info px-3">
                              <Link to="/product/1">
                                <h6>Horizon Zero Dawn™ Complete Edition</h6>
                              </Link>
                              <Rating name='read-only' value={4.5} readOnly precision={0.5} size='small' />
                            </div>
                          </div>
                      </td>
                      <td width="15%">₩29,449</td>
                      <td width="25%"><QuantityBox /></td>
                      <td width="15%">₩29,449</td>
                      <td width="10%" className='remove'><IoIosClose /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='d-flex'>
              <div className='col-md-8'>
              </div>
              <div className='col-md-3 ml-5'>
                <div className='card border p-3 cartDetails'>
                  <h4>결제 정보</h4>
                  <div className='d-flex align-items-center'>
                    <span>총 합계</span>
                    <span className='ml-auto text-red font-weight-bold'>₩29,449</span>
                  </div>
                  <br />
                  <Button className='btn-purple bg-red btn-lg btn-big'>구매</Button>
                </div>
              </div>
            </div>
            <RelatedProducts title="관련 상품" />
          </div>
        </div>
      </section>
    </>
  )
}
