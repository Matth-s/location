import React, { useContext, useEffect, useState } from "react";
import { getAllMateriel } from "./utils/firebaseRequest";
import { Routes, Route, Navigate } from "react-router-dom";
import { DataContext, DataContextProvider } from "./context/DataContext";

import Home from "./pages/Home";
import Outils from "./pages/Outils";
import Vehicules from "./pages/Vehicules";
import ViewProduct from "./pages/ViewProduct";
import Contact from "./pages/Contact";

import Header from "./components/Header";

function App() {
  return (
    <DataContextProvider>
      <Header />
      <AppContent />
    </DataContextProvider>
  );
}

function AppContent() {
  const { setData } = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await getAllMateriel();
        setData(request);
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [setData]);

  return (
    <div className="app">
      <Routes>
        <Route path="/accueil" element={<Home />} />
        <Route
          path="/outils"
          element={<Outils isLoading={isLoading} error={error} />}
        />
        <Route
          path="/vehicules"
          element={<Vehicules isLoading={isLoading} error={error} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/produit/:id"
          element={<ViewProduct isLoading={isLoading} />}
        />
        <Route path="/*" element={<Navigate to="/accueil" />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
