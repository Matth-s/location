import React, { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";

import SearchBar from "../components/SearchBar";
import Product from "../components/Product";
import BannerCategory from "../components/BannerCategory";
import Loader from "../components/Loader";

const Outils = ({ isLoading, error }) => {
  const [search, setSearch] = useState("");
  const { data } = useContext(DataContext);
  const filteredData = data.filter((item) =>
    item.nom.toLowerCase().startsWith(search.toLowerCase())
  );
  const searchResultText = filteredData.length > 1 ? "résultats" : "résultat";

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>Erreur</p>
      ) : (
        <>
          <BannerCategory categorie="Outils" />
          <SearchBar setSearch={setSearch} />
          {search.length > 0 && (
            <p className="result-search">
              {filteredData.length} {searchResultText} pour "
              <span>{search}</span>"
            </p>
          )}
          <div className="product-div">
            {filteredData.map(
              (item) =>
                item.categorie.includes("outil") && (
                  <Product key={item.id} productData={item} />
                )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Outils;
