import React from "react";
import { useDispatch } from "react-redux";
import { nextImage, prevImage } from "./actions";

const NavigateComponent = () => {
  const dispatch = useDispatch();
  return (
    <div className="button-wrapper">
      <button onClick={() => dispatch(prevImage())}>Prev</button>
      <button onClick={() => dispatch(nextImage())}>Next</button>
    </div>
  );
};

export default NavigateComponent;
