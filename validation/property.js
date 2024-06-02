const letrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/;
const direccionRegex = /^[a-zA-Z0-9\s#áéíóúÁÉÍÓÚüÜ.,-]+$/;
const numerosRegex = /^[0-9]+$/;
const celularRegex = /^3\d{9}$/;
const fechaRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
const horaRegex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;

export const propertyValidation = {
  referenceValidator: async (reference = "") => {
    if (!numerosRegex.test(reference)) {
      throw new Error("La referencia debe ser un número entero");
    }
  },

  typeValidator: async (type = "") => {
    const allowedTypes = [
      "Piso nuevo",
      "Piso de ocasión",
      "Villa",
      "Casa",
      "Local",
    ];
    if (!allowedTypes.includes(type)) {
      throw new Error("El tipo de propiedad no es válido");
    }
  },

  areaValidator: async (area = "") => {
    if (!numerosRegex.test(area)) {
      throw new Error("El area debe ser un número entero");
    }
  },

  addressValidator: async (address = "") => {
    if (!direccionRegex.test(address)) {
      throw new Error("La dirección ingresada no cumple con el formato");
    }
  },

  offerModeValidator: async (offerMode = "") => {
    const allowedModes = ["Venta", "Alquiler"];
    if (!allowedModes.includes(offerMode)) {
      throw new Error("El modo de oferta no es válido");
    }
  },

  priceValidator: async (value = "") => {
    if (!numerosRegex.test(value)) {
      throw new Error("El precio debe ser un número positivo");
    }
  },

  ownerValidator: async (owner = "") => {
    if (!letrasRegex.test(owner?.name)) {
      throw new Error(
        "El nombre del propietario debe incluir unicamente letras"
      );
    }

    if (!celularRegex.test(owner?.cellphone)) {
      throw new Error("El celular del propietario no cumple con el formato");
    }
  },

  visitValidator: async (visits = "") => {
    if (visits.length > 0 && !fechaRegex.test(visits[0]?.date)) {
      throw new Error("La fecha no cumple con el formato dd/mm/aaaa");
    }

    if (visits.length > 0 && !horaRegex.test(visits[0]?.hour)) {
      throw new Error("La hora no cumple con el formato hh:mm");
    }
  },

  zoneValidator: async (zone = "") => {
    if (!letrasRegex.test(zone)) {
      throw new Error("La zona solo puede contener letras");
    }
  },

  parcelSizeValidator: async (parcelSize = "") => {
    if (!numerosRegex.test(parcelSize)) {
      throw new Error("El tamaño de la parcela debe ser un numero entero");
    }
  },

  urbanizationValidator: async (urbanization = "") => {
    if (!letrasRegex.test(urbanization)) {
      throw new Error("La urbanizacion solo puede contener letras");
    }
  },

  staysValidator: async (stays = "") => {
    const allowedStates = [true, false];

    if (!numerosRegex.test(stays?.bedrooms)) {
      throw new Error("El numero de habitaciones debe ser un numero entero");
    }

    if (!numerosRegex.test(stays?.bathrooms)) {
      throw new Error("El numero de baños debe ser un numero entero");
    }

    if (!numerosRegex.test(stays?.toiletrooms)) {
      throw new Error(
        "El numero de habitaciones de aseo debe ser un numero entero"
      );
    }

    if (!numerosRegex.test(stays?.kitchens)) {
      throw new Error("El numero de cocinas debe ser un numero entero");
    }

    if (!allowedStates.includes(stays?.balcony)) {
      throw new Error(
        "El estado ingresado para el campo 'balcones' no es adecuado"
      );
    }
  },

  featuresValidator: async (features = "") => {
    const allowedStates = [true, false];

    if (!allowedStates.includes(features?.gas)) {
      throw new Error("El estado ingresado para el campo 'Gas' no es adecuado");
    }

    if (!allowedStates.includes(features?.parquet)) {
      throw new Error(
        "El estado ingresado para el campo 'Parquet' no es adecuado"
      );
    }

    if (!allowedStates.includes(features?.armoredDoor)) {
      throw new Error(
        "El estado ingresado para el campo 'Puertas blindadas' no es adecuado"
      );
    }
  },

  filterValidator: async (filter = "") => {
    const allowedFilter = ["Venta", "Alquiler"];

    if (!allowedFilter.includes(filter)) {
      throw new Error(
        "El estado filtro ingresado no se encuentra registrado (use 'Venta' o 'Alquiler')"
      );
    }
  },
};
