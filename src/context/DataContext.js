import React, { createContext, useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

const DataContext = createContext({
  data: [],
  dataViewProduct: {},
});

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [dataViewProduct, setDataViewProduct] = useState({});

  useEffect(() => {
    const materialCollection = collection(db, "materiel");

    // Utilisez onSnapshot pour écouter les changements en temps réel dans la collection "materiel"
    const unsubscribe = onSnapshot(materialCollection, (snapshot) => {
      const newData = [];
      const newDataViewProduct = { ...dataViewProduct }; // Créez une copie de dataViewProduct pour mettre à jour les nouvelles données

      snapshot.forEach((doc) => {
        const materialData = { id: doc.id, ...doc.data() };
        newData.push(materialData);

        // Mettre à jour newDataViewProduct avec les nouvelles données
        newDataViewProduct[doc.id] = materialData;
      });

      // Mettre à jour le state data avec les nouvelles données
      setData(newData);

      // Mettre à jour dataViewProduct avec les nouvelles données
      setDataViewProduct(newDataViewProduct);
    });

    // Désabonnez-vous lorsque le composant est démonté
    return () => unsubscribe();
  }, []); // Le tableau vide [] en tant que deuxième argument indique que useEffect s'exécute uniquement au montage du composant

  return (
    <DataContext.Provider
      value={{
        data,
        dataViewProduct,
        setDataViewProduct,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
