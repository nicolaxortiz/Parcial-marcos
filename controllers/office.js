import { office } from "../models/office.js";

export const officeController = {
  createOffice: async (req, res) => {
    try {
      const newOffice = new office(req.body);
      await newOffice.save();
      return res
        .status(201)
        .json({ message: "Oficina creada exitosamente", newOffice });
    } catch (error) {
      return res.status(400).json({
        message: "Hubo un error al crear la oficina",
        error: error.message,
      });
    }
  },

  updateOffice: async (req, res) => {
    let { id } = req.params;
    let updateObject = req.body;
    try {
      const updateOffice = await office.findByIdAndUpdate(id, updateObject, {
        new: true,
      });

      if (!updateOffice) {
        return res.status(404).json({
          message: "No se encontro ninguna oficina con el identificador",
        });
      }

      return res
        .status(200)
        .json({ message: "Oficina actualizada correctamente", updateOffice });
    } catch (error) {
      return res.status(500).json({
        message: "Hubo un error al editar la oficina",
        error: error.message,
      });
    }
  },

  deleteOffice: async (req, res) => {
    let { id } = req.params;

    try {
      const deleteOffice = await office.findByIdAndUpdate(id, {
        isActive: false,
      });

      if (!deleteOffice) {
        return res.status(404).json({
          message: "No se encontro ninguna oficina con ese identificador",
        });
      }

      return res.status(200).json({
        message: "Oficina 'eliminada' correctamente",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al eliminar la oficina",
        error: error.message,
      });
    }
  },
};
