import Button from "@mui/material/Button";
import { useState } from "react";
import { Link } from "react-router-dom";


export const Navigation = () => {

  const [isOpenSidebarValue, setIsOpenSidebarValue] = useState(false);

  console.log(isOpenSidebarValue);
  

  return (
        <nav>
          <div className="container">
            <div className="row">
              <div className="navPart2 d-flex align-items-center text-center justify-content-center">
                <ul className="list list-inline">
                  <li className="list-inline-item">
                    <Link to={"/cat/1"}><Button>Action</Button></Link>
                    {/* <div className="submenu">
                      <Link to={"/"}><Button>clothing</Button></Link>
                      <Link to={"/"}><Button>footwear</Button></Link>
                      <Link to={"/"}><Button>watches</Button></Link>
                      <Link to={"/"}><Button>clothing</Button></Link>
                      <Link to={"/"}><Button>footwear</Button></Link>
                      <Link to={"/"}><Button>watches</Button></Link>
                    </div> */}
                  </li>
                  <li className="list-inline-item">
                    <Link to={"/cat/1"}><Button>RPG</Button></Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={"/cat/1"}><Button>Adventure</Button></Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={"/cat/1"}><Button>FPS</Button></Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={"/cat/1"}><Button>Casual</Button></Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={"/cat/1"}><Button>Strategy</Button></Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={"/cat/1"}><Button>Horror</Button></Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={"/cat/1"}><Button>Survival</Button></Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={"/cat/1"}><Button>Puzzle</Button></Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={"/cat/1"}><Button>Sports</Button></Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={"/"}><Button>Community</Button></Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={"/"}><Button>Contact</Button></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
  )
}