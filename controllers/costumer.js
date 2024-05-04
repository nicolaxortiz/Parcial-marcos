import { costumer } from "../models/costumer.js";

export const costumerController = {
  createCostumer: async (req, res) => {
    try {
      const newCostumer = new costumer(req.body);
      await newCostumer.save();
      return res
        .status(201)
        .json({ message: "Cliente creado exitosamente", newCostumer });
    } catch (error) {
      return res.status(400).json({
        message: "Hubo un error al crear al usuario",
        error: error.message,
      });
    }
  },

  updateCostumer: async (req, res) => {
    let { id } = req.params;
    let updateObject = req.body;

    try {
      const updateCliente = await costumer.findByIdAndUpdate(id, updateObject, {
        new: true,
      });

      if (!updateCliente) {
        return res.status(404).json({
          message: "No se encontro ningun cliente con el identificador",
        });
      }

      return res
        .status(200)
        .json({ message: "Cliente actualizado correctamente", updateCliente });
    } catch (error) {
      return res.status(500).json({
        message: "Hubo un error al editar el cliente",
        error: error.message,
      });
    }
  },
};
