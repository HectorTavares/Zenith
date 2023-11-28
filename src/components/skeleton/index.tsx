import React from "react";
import "./style.scss";

const CardSkeleton = () => {
  return (
    <div className="card-skeleton">
      <div className="image-skeleton"></div>
      <div className="text-container">
        <div className="text-skeleton"></div>
        <div className="text-skeleton"></div>
      </div>
      <div className="text-skeleton full"></div>
      <div className="button-skeleton"></div>
    </div>
  );
};

export default CardSkeleton;
