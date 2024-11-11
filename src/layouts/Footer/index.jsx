import React from "react";
import { CiBadgeDollar } from 'react-icons/ci';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { IoLogoGameControllerB } from "react-icons/io";
import { TbRosetteDiscount, TbTruckDelivery } from 'react-icons/tb';
import { Link } from "react-router-dom";
import './style.css';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="topInfo row">
          <div className="col d-flex align-items-center">
            <span><IoLogoGameControllerB /></span>
            <span className="ml-2">매일 최신 게임 업데이트!</span>
          </div>
          
          <div className="col d-flex align-items-center">
            <span><TbTruckDelivery /></span>
            <span className="ml-2">신속한 시디키 발급!</span>
          </div>

          <div className="col d-flex align-items-center">
            <span><TbRosetteDiscount  /></span>
            <span className="ml-2">매일 메가세일!</span>
          </div>

          <div className="col d-flex align-items-center">
            <span><CiBadgeDollar /></span>
            <span className="ml-2">가장 가성비 좋은 마켓!</span>
          </div>
        </div>


        {/* <div className="row mt-5 linksWrap">
          <div className="col">
            <h5>FROUT & VEGETABLES</h5>
            <ul>
              <li><Link to="#">Fresh Vegetables</Link></li>
              <li><Link to="#">Herbs & Seasonings</Link></li>
              <li><Link to="#">Fresh Fruits</Link></li>
              <li><Link to="#">Cuts & Sprouts</Link></li>
              <li><Link to="#">Exotic Fruits & Veggies</Link></li>
              <li><Link to="#">Packaged Produce</Link></li>
              <li><Link to="#">Party Trays</Link></li>
            </ul>
          </div>

          <div className="col">
            <h5>BREAKFAST & DAIRY</h5>
            <ul>
              <li><Link to="#">Milk & Flavoured Milk</Link></li>
              <li><Link to="#">Butter and Margarine</Link></li>
              <li><Link to="#">Cheese</Link></li>
              <li><Link to="#">Eggs Substitutes</Link></li>
              <li><Link to="#">Honey</Link></li>
              <li><Link to="#">Marmalades</Link></li>
              <li><Link to="#">Sour Cream and Dips</Link></li>
              <li><Link to="#">Yogurt</Link></li>
            </ul>
          </div>

          <div className="col">
            <h5>MEAT & SEAFOOD</h5>
            <ul>
              <li><Link to="#">Breakfast Sausage</Link></li>
              <li><Link to="#">Dinner Sausage</Link></li>
              <li><Link to="#">Beef</Link></li>
              <li><Link to="#">Chicken</Link></li>
              <li><Link to="#">Sliced Deli Meat</Link></li>
              <li><Link to="#">Shrimp</Link></li>
              <li><Link to="#">Wild Caught Fillets</Link></li>
              <li><Link to="#">Crab and Shellfish</Link></li>
              <li><Link to="#">Farm Raised Fillets</Link></li>
            </ul>
          </div>

          <div className="col">
            <h5>BEVERAGES</h5>
            <ul>
              <li><Link to="#">Water</Link></li>
              <li><Link to="#">Sparkling Water</Link></li>
              <li><Link to="#">Soda & Pop</Link></li>
              <li><Link to="#">Coffee</Link></li>
              <li><Link to="#">Milk & Plant-Based Milk</Link></li>
              <li><Link to="#">Tea & Kombucha</Link></li>
              <li><Link to="#">Drink Boxes & Pouches</Link></li>
              <li><Link to="#">Craft Beer</Link></li>
              <li><Link to="#">Wine</Link></li>
            </ul>
          </div>

          <div className="col">
            <h5>BREADS & BAKERY</h5>
            <ul>
              <li><Link to="#">Milk & Flavoured Milk</Link></li>
              <li><Link to="#">Butter and Margarine</Link></li>
              <li><Link to="#">Cheese</Link></li>
              <li><Link to="#">Eggs Substitutes</Link></li>
              <li><Link to="#">Honey</Link></li>
              <li><Link to="#">Marmalades</Link></li>
              <li><Link to="#">Sour Cream and Dips</Link></li>
              <li><Link to="#">Yogurt</Link></li>
            </ul>
          </div>
        </div> */}

        <div className="copyright mt-3 pt-3 pb-3 d-flex">
          <p className="mb-0">Copyright 2024. All rights reserved.</p>
          <ul className="list list-inline ml-auto mb-3 mt-3 text-center socials">
            <li className="list-inline-item">
              <Link to={"#"}><FaFacebookF /></Link>
            </li>
            <li className="list-inline-item">
              <Link to={"#"}><FiTwitter /></Link>
            </li>
            <li className="list-inline-item">
              <Link to={"#"}><FaInstagram /></Link>
            </li>
          </ul>
          <br />
        </div>
      </div>
    </footer>
  );
}
