import React from "react";
import FormContact from "../components/FormContact";
import BannerCategory from "../components/BannerCategory";

const Contact = () => {
  return (
    <div className="contact-container">
      <BannerCategory categorie={"Contact"} />
      <FormContact />
    </div>
  );
};

export default Contact;
