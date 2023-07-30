import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateBack = () => {
  const navigate = useNavigate();
  return (
    <button className="navigateButton" onClick={() => navigate(-1)}>
      Retour
    </button>
  );
};

export default NavigateBack;
