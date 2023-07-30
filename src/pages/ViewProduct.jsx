import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { useParams } from "react-router-dom";

import Carrousel from "../components/Carrousel";
import InformationProduct from "../components/InformationProduct";
import NavigateBack from "../components/NavigateBack";
import Loader from "../components/Loader";

const ViewProduct = ({ isLoading }) => {
  const { dataViewProduct, data, setDataViewProduct } = useContext(DataContext);
  const { id } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!dataViewProduct.id) {
      if (!isLoading) {
        const getMaterial = data.filter(
          (material) => material.id === parseInt(id)
        );
        if (getMaterial[0] === undefined) {
          setError(true);
        } else {
          setDataViewProduct(getMaterial[0]);
          setError(false);
        }
      }
    }
  }, [dataViewProduct.id, isLoading]);

  return (
    <>
      {error ? (
        <p>Erreur</p>
      ) : !dataViewProduct.id ? (
        <Loader />
      ) : (
        <div className="viewProduct-container">
          <NavigateBack />
          <div className="viewProduct-div flex">
            <Carrousel data={dataViewProduct.images} />
            <InformationProduct data={dataViewProduct} />
          </div>
        </div>
      )}
    </>
  );
};

export default ViewProduct;
