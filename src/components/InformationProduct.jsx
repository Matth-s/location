import React from "react";

const InformationProduct = ({ data }) => {
  const formateDate = (date) => {
    const currentDate = new Date(date);
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  return (
    <section className="informationProduct-container">
      <h2>{data.nom}</h2>
      <p>Description {data.description}</p>
      <p className="price">Acompte : {data.acompte} €</p>
      <p className="price">À partir de : {data.prix}€/jour</p>
      <p>
        Disponibilité :
        {data.disponibilite === true
          ? " disponible"
          : data.date === ""
          ? " indisponible"
          : ` disponible à partir du ${formateDate(data.date)}`}
      </p>
    </section>
  );
};

export default InformationProduct;
