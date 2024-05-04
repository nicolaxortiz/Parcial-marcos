const letrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ]+(?:\s[a-zA-ZáéíóúÁÉÍÓÚüÜ]+)?$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const numerosRegex = /^[0-9]+$/;
const celularRegex = /^3\d{9}$/;

export const costumerValidation = {
  nameValidator: async (name = "") => {
    let isCorrect = letrasRegex.test(name);
    if (!isCorrect) {
      throw new Error("El nombre solo puede contener letras");
    }
  },

  lastNameValidator: async (lastName = "") => {
    let isCorrect = letrasRegex.test(lastName);
    if (!isCorrect) {
      throw new Error("El apellido solo puede contener letras");
    }
  },

  documentValidator: async (document = 0) => {
    let isCorrect = numerosRegex.test(document);
    if (!isCorrect) {
      throw new Error("El documento solo debe contener digitos");
    }
  },

  emailValidator: async (email = "") => {
    let isCorrect = emailRegex.test(email);
    if (!isCorrect) {
      throw new Error("El correo electronico es incorrecto");
    }
  },

  cellphoneValidator: async (cellphone = "") => {
    let isCorrect = celularRegex.test(cellphone);
    if (!isCorrect) {
      throw new Error("El numero de celular tiene un formato incorrecto");
    }
  },

  cityValidator: async (city = "") => {
    let isCorrect = letrasRegex.test(city);
    if (!isCorrect) {
      throw new Error("La ciudad solo puede contener letras");
    }
  },
};
