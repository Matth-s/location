const regexNameFirstName = /^[a-zA-Z\-]+$/;
const regexPhone = /^0[67]\d{8}$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const wrongFormat = "Champ non valide";
const fieldRequired = "Champ obligatoire";

export const ckeckName = (name) => {
  if (!name.trim()) {
    return fieldRequired;
  } else if (!regexNameFirstName.test(name)) {
    return wrongFormat;
  }
  return;
};

export const checkFirstName = (firstName) => {
  if (!firstName.trim()) {
    return fieldRequired;
  } else if (!regexNameFirstName.test(firstName)) {
    return wrongFormat;
  }
  return;
};

export const checkPhoneNumber = (phone) => {
  if (!phone.trim()) {
    return fieldRequired;
  } else if (!regexPhone.test(phone)) {
    return wrongFormat;
  }
  return;
};

export const checkEmail = (email) => {
  if (!email.trim()) {
    return fieldRequired;
  } else if (!regexEmail.test(email)) {
    return wrongFormat;
  }
  return;
};

export const checkMessage = (message) => {
  if (!message.trim()) {
    return fieldRequired;
  }
  return;
};
