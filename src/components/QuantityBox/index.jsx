import Button from "@mui/material/Button";
import React, { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa6";

export const QuantityBox = () => {

  const [value, setValue] = useState(1)

  const minus = () => {
    if(value > 1) {
      setValue(value - 1)
    }
  }

  const plus = () => {
    setValue(value + 1)
  }

  return (
    <div className="quantityDrop d-flex align-items-center">
      <Button onClick={minus}><FaMinus /></Button>
      <input className="text-white" type="text" value={value} />
      <Button onClick={plus}><FaPlus /></Button>
  </div>
  )
}
