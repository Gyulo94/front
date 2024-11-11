import Button from "@mui/material/Button";
import { IoIosSearch } from "react-icons/io";

export const SearchBox = () => {

  return (
      <div className="headerSearch ml-3 mr-3">
        <input type="text" placeholder="게임 검색..." />
        <Button><IoIosSearch /></Button>
      </div>
    )
}