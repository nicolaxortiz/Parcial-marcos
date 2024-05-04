const letrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/;
const direccionRegex = /^[a-zA-Z0-9\s#áéíóúÁÉÍÓÚüÜ.,-]+$/;
const numerosRegex = /^[0-9]+$/;
const celularRegex = /^3\d{9}$/;

export const officeValidation = {
  officeNumberValidator: async (officeNumber = "") => {
    let isCorrect = numerosRegex.test(officeNumber);
    if (!isCorrect) {
      throw new Error(
        "El numero de oficina solo puede contener digitos enteros"
      );
    }
  },

  nameValidator: async (name = "") => {
    let isCorrect = letrasRegex.test(name);
    if (!isCorrect) {
      throw new Error("El nombre solo puede contener letras");
    }
  },

  cityValidator: async (city = "") => {
    let isCorrect = letrasRegex.test(city);
    if (!isCorrect) {
      throw new Error("La ciudad solo puede contener letras");
    }
  },

  addressValidator: async (address = "") => {
    let isCorrect = direccionRegex.test(address);
    if (!isCorrect) {
      throw new Error("La direccion ingresada no cumple con el formato");
    }
  },

  cellphoneValidator: async (cellphone = "") => {
    let isCorrect = celularRegex.test(cellphone);
    if (!isCorrect) {
      throw new Error("El celular no cumple con el formato");
    }
  },
};
