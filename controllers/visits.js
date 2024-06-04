import { visit } from "../models/visits.js";

export const visitsController = {
  createVisit: async (req, res) => {
    try {
      const { costumerId, propertyId, date, hour, comment } = req.body;

      const newVisit = new visit({
        costumerId,
        propertyId,
        date,
        hour,
        comment,
      });

      await newVisit.save();

      res.status(201).json(newVisit);
    } catch (error) {
      res.status(500).json({ message: "Error al crear la visita", error });
    }
  },

  getVisitsByProperty: async (req, res) => {
    try {
      const { id } = req.params;
      const visits = await visit
        .find({ propertyId: id })
        .populate("costumerId");

      if (visits.length === 0) {
        return res
          .status(404)
          .json({ message: "No se encontraron visitas para esta propiedad" });
      }

      res.status(200).json(visits);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener las visitas", error });
    }
  },
};
