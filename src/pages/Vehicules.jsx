import React, { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";

import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import Product from "../components/Product";
import BannerCategory from "../components/BannerCategory";

const Vehicules = ({ isLoading, error }) => {
  const [search, setSearch] = useState("");
  const { data } = useContext(DataContext);
  const filteredData = data.filter((item) =>
    item.nom.toLowerCase().startsWith(search.toLocaleLowerCase())
  );

  return (
    <div className="vehicules-container">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>Il a eu une erreur</p>
      ) : (
        <>
          <BannerCategory categorie="Véhicules" />
          <SearchBar setSearch={setSearch} />
          {search.length > 0 && (
            <p className="result-search">
              {filteredData.length}
              {filteredData.length > 1 ? " résultats" : " resultat"} pour "
              {search}"
            </p>
          )}
          <div className="product-div">
            {filteredData.map(
              (item) =>
                item.categorie.includes("vehicule") && (
                  <Product key={item.id} productData={item} />
                )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Vehicules;
