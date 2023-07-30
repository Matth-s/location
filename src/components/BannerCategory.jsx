import React from "react";

const BannerCategory = ({ categorie }) => {
  return (
    <div className="bannerCategory-container flex">
      <h2>{categorie}</h2>
    </div>
  );
};

export default BannerCategory;
