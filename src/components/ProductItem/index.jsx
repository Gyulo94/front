import { Button, Rating } from '@mui/material';
import React, { useContext } from 'react';
import { BsCartFill } from "react-icons/bs";
import { IoMdHeartEmpty } from 'react-icons/io';
import { TfiFullscreen } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';

export const ProductItem = (props) => {

  const context = useContext(MyContext);

  const viewProductDetails = id => {
    context.setIsOpenProductModal(true)
  }

  return (
    <>
      <div className={`productItem ${props.itemView}`}>
        <div className="imgWrapper">
          <img src="https://cdn.cdkeys.com/700x700/media/catalog/product/n/e/new_project_3__3.jpg"className="w-100" />
          <span className="badge badge-primary">28%</span>
          <div className="actions">
            <Button onClick={() => viewProductDetails(1)}><TfiFullscreen /></Button>
            <Button><IoMdHeartEmpty style={{fontSize: "20px"}} /></Button>
          </div>
        </div>
        <div className="info">
          <Link to={'/product/1'} style={{color: "#FFE8FF"}}>
            <h4>Horizon Zero Dawn™ Complete Edition</h4>
          </Link>
          <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />
          <div className="d-flex">
            <span className="oldPrice">₩73,639</span>
            <span className="netPrice text-danger ml-2">₩29,449</span>
          </div>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <Link to={'/cart'}>
            <Button className="btn-purple btn-round">
              <BsCartFill /> &nbsp; 카트에 담기
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
