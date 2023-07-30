import React from "react";

const SearchBar = ({ setSearch }) => {
  return (
    <div className="search-container flex flex__alignCenter">
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Rechercher un produit ..."
      />
      <img src="./assets/icon-search.svg" alt="search icon" />
    </div>
  );
};

export default SearchBar;
