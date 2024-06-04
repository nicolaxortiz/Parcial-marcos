import { user } from "../models/user.js";
import bcryptjs from "bcryptjs";

export const userController = {
  getUsuarioById: async (req, res = response) => {
    const { id } = req.params;
    try {
      const usuario = await user.findById(id);
      if (!usuario) {
        return res.status(404).json({
          ok: false,
          msg: "Usuario no encontrado por id",
        });
      }
      res.status(200).json({
        ok: true,
        usuario,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: "Error inesperado... revisar logs",
      });
    }
  },

  createUser: async (req, res = response) => {
    const { name, email, password, rol } = req.body;

    try {
      // Verificar si el correo ya existe
      const userExists = await user.findOne({ email });
      if (userExists) {
        return res.status(400).json({
          ok: false,
          msg: "El correo ya está registrado",
        });
      }

      // Crear el usuario con el modelo
      const newUser = new user({ name, email, password, rol });

      // Encriptar la contraseña
      const salt = bcryptjs.genSaltSync();
      newUser.password = bcryptjs.hashSync(password, salt);

      // Guardar usuario en la BD
      await newUser.save();

      res.status(201).json({
        ok: true,
        user: newUser,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: "Hable con el administrador",
      });
    }
  },
};
