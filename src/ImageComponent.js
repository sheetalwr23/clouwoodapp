import React from "react";
import { useSelector } from "react-redux";

export const ImageComponent = () => {
  const images = useSelector((state) => state.images);
  const currentIndex = useSelector((state) => state.currentIndex);

  return (
    <div className="button-wrapper">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};
