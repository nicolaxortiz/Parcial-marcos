import { property } from "../models/property.js";
import { villa } from "../models/villa.js";
import { house } from "../models/house.js";
import { premises } from "../models/premises.js";
import { apartment } from "../models/apartment.js";
import { office } from "../models/office.js";

export const propertyController = {

  getAll: async (req,res) => {
    try{
      const inmuebles = await property.find()
    if (inmuebles.length === 0) {
        res
          .status(404)
          .json({ message: "No se encontraron inmuebles"});
      } else {
        res.status(200).json(inmuebles);
      }
    } catch (error) {
      res.status(500).json({
        message: "Hubo un error al obtener los inmuebles",
        error: error.message,
      });
    }
  },
  getByFilter: async (req, res) => {
    const { filter } = req.params;

    try {
      const inmuebles = await property
        .find({ offerMode: filter })
        .populate("office")
        .populate("visits.costumerId")
        .exec();
      if (inmuebles.length === 0) {
        res
          .status(404)
          .json({ message: "No se encontraron inmuebles para " + filter });
      } else {
        res.status(200).json(inmuebles);
      }
    } catch (error) {
      res.status(500).json({
        message: "Hubo un error al obtener los inmuebles",
        error: error.message,
      });
    }
  },

  getByReference: async (req, res) => {
    const { reference } = req.params;
    try {
      const inmueble = await property
        .findOne({ reference: reference })
        .populate("office")
        .populate("visits.costumerId")
        .exec();
      if (inmueble.length === 0) {
        res.status(404).json({
          message:
            "No se encontro ningun inmueble con ese numero de referencia",
        });
      } else {
        res.status(200).json(inmueble);
      }
    } catch (error) {
      res.status(500).json({
        message: "Hubo un error al obtener el inmueble",
        error: error.message,
      });
    }
  },

  createVilla: async (req, res) => {
    try {
      const newVilla = new villa(req.body);
      await newVilla.save();
      res.status(201).json({ message: "Villa creada exitosamente", newVilla });
    } catch (error) {
      res.status(400).json({
        message: "Hubo un error al crear la villa",
        error: error.message,
      });
    }
  },

  createHouse: async (req, res) => {
    try {
      const newHouse = new house(req.body);
      await newHouse.save();
      res.status(201).json({ message: "Casa creada exitosamente", newHouse });
    } catch (error) {
      res.status(400).json({
        message: "Hubo un error al crear la casa",
        error: error.message,
      });
    }
  },

  createPremises: async (req, res) => {
    try {
      const newPremises = new premises(req.body);
      await newPremises.save();
      res
        .status(201)
        .json({ message: "Local creado exitosamente", newPremises });
    } catch (error) {
      res.status(400).json({
        message: "Hubo un error al crear el local",
        error: error.message,
      });
    }
  },

  createApartment: async (req, res) => {
    try {
      const newApartment = new apartment(req.body);
      await newApartment.save();
      res
        .status(201)
        .json({ message: "Piso creado exitosamente", newApartment });
    } catch (error) {
      res.status(400).json({
        message: "Hubo un error al crear el piso",
        error: error.message,
      });
    }
  },

  updateProperty: async (req, res) => {
    let { reference } = req.params;
    let updateObject = req.body;
    try {
      let propertyToUpdate = await property.findOne({ reference: reference });
      if (!propertyToUpdate) {
        return res.status(404).json({
          message:
            "No se encontró ningún inmueble con ese número de referencia",
        });
      }

      const { visits, ...otherFieldsToUpdate } = updateObject;
      Object.assign(propertyToUpdate, otherFieldsToUpdate);

      if (visits && visits.length > 0) {
        propertyToUpdate.visits.push(...visits);
      }

      const update = await propertyToUpdate.save();

      res.status(200).json(update);
    } catch (error) {
      res.status(500).json({
        message: "Hubo un error al obtener los inmuebles",
        error: error.message,
      });
    }
  },
};
