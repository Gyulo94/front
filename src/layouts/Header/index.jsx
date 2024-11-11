import Button from "@mui/material/Button";
import { useContext } from "react";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
// import { Logo } from '../../assets';
import { Navigation, SearchBox } from "../../components";
import './style.css';

export default function Header() {

  const context = useContext(MyContext);

  return (
    <>
      <div className="headerWrapper">
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to="/">
                  <img src="https://store.fastly.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" alt="Logo" />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">
                <SearchBox />
                <div className="part3 d-flex align-items-center ml-auto">
                  {
                    context.isLogin === false ? <Link to={"/sign-in"}><Button className="btn-purple btn-round mr-3">로그인</Button></Link> : <Button className="circle mr-3"><FiUser /></Button>
                  }
                    <div className="ml-auto cartTab d-flex align-items-center">
                      <div className="position-relative  ml-2">
                        <Link to="/cart">
                          <Button className="circle"><IoBagOutline /></Button>
                        </Link>
                        <span className="count d-flex align-items-center justify-content-center">1</span>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Navigation />

      </div>
    </>
  );
}
