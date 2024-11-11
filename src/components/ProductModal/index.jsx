import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import React, { useContext } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartSharp } from 'react-icons/io5';
import { MdClose } from "react-icons/md";
import { MyContext } from "../../App";
import { ProductZoom, QuantityBox } from "../../components";


export const ProductModal = () => {

  const context = useContext(MyContext);

  return (
    <>
      <Dialog open={true} className="productModal" onClose={() => context.setIsOpenProductModal(false)}>
        <Button className="close_" onClick={() => context.setIsOpenProductModal(false)}><MdClose /></Button>
        <h4 className="mb-1 font-weight-bold text-white">Horizon Zero Dawn™ Complete Edition</h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span className="text-white">Category:</span>
            <span className="ml-2 text-white"><b>Adventure </b></span>
          </div>
          <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />
        </div>
        <hr />
        <div className="row mt-2 productDetailModal">
          <div className="col-md-5">
            <ProductZoom />
          </div>
          <div className="col-md-7">
            <div className="d-flex info align-items-center mb-3">
              <span className="oldPrice lg mr-2">₩73,639</span>
              <span className="netPrice text-danger lg">₩29,449</span>
            </div>
            <p className="mt-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, odit! Dicta vero omnis, minus repudiandae libero placeat aspernatur adipisci consequatur sequi alias, delectus eveniet eligendi dignissimos natus non temporibus eum.</p>

            <div className="d-flex align-items-center">
              <QuantityBox />
              <Button className="btn-purple btn-lg btn-big btn-round ml-3"><IoCartSharp/> 카트에 담기</Button>
            </div>

            <div className="d-flix align-items-center mt-5 actions">
              <Button className="btn-round btn-sml" variant="outlined"><IoIosHeartEmpty /> &nbsp; 찜하기</Button>
              {/* <Button className="btn-round btn-sml ml-3" variant="outlined"><MdOutlineCompareArrows /> &nbsp; 공유하기</Button> */}
            </div>
          </div>
        </div>
      </Dialog>
    </>
  )
}
