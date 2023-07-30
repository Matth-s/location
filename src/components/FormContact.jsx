import React, { useRef, useState } from "react";
import {
  ckeckName,
  checkFirstName,
  checkPhoneNumber,
  checkEmail,
  checkMessage,
} from "../utils/FormCheck";

const FormContact = () => {
  const formContact = useRef();
  const [errorName, setErrorName] = useState();
  const [errorFirstName, setErrorFirstName] = useState();
  const [errorPhone, setErrorPhone] = useState();
  const [errorEmail, setErrorEmail] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, firstName, phone, email, message } = formContact.current;

    setErrorName(ckeckName(name.value));
    setErrorFirstName(checkFirstName(firstName.value));
    setErrorPhone(checkPhoneNumber(phone.value));
    setErrorEmail(checkEmail(email.value));
    setErrorMessage(checkMessage(message.value));
  };

  return (
    <form
      ref={formContact}
      className="formContact-container"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div>
        <label htmlFor="nom">Nom</label>
        <input
          className={errorName ? "errorInput" : null}
          type="text"
          name="name"
          id="name"
        />
        {errorName && (
          <>
            <p className="errorMessage">{errorName}</p>
            <img src="./assets/icon-error.svg" alt="error" />
          </>
        )}
      </div>

      <div>
        <label htmlFor="prenom">Prénom</label>
        <input
          className={errorFirstName ? "errorInput" : null}
          type="text"
          name="firstName"
          id="firstName"
        />
        {errorFirstName && (
          <>
            <p className="errorMessage">{errorFirstName}</p>
            <img src="./assets/icon-error.svg" alt="error" />
          </>
        )}
      </div>

      <div>
        <label htmlFor="telephone">Téléphone</label>
        <input
          className={errorPhone ? "errorInput" : null}
          type="tel"
          name="phone"
          id="phone"
        />
        {errorPhone && (
          <>
            <p className="errorMessage">{errorPhone}</p>
            <img src="./assets/icon-error.svg" alt="error" />
          </>
        )}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          className={errorEmail ? "errorInput" : null}
          type="email"
          name="email"
          id="email"
        />
        {errorEmail && (
          <>
            <p className="errorMessage">{errorEmail}</p>
            <img src="./assets/icon-error.svg" alt="error" />
          </>
        )}
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message"></textarea>
        {errorMessage && (
          <>
            <p className="errorMessage">{errorMessage}</p>
            <img src="./assets/icon-error.svg" alt="error" />
          </>
        )}
      </div>

      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default FormContact;
