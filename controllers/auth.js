import { response } from "express";
import bcryptjs from "bcryptjs";
import { user } from "../models/user.js";
import { generarJWT } from "../config/jwt.js";

export const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    // Verificar si el email existe
    const usuario = await user.findOne({ email });
    if (!usuario) {
      return res.status(400).json({
        msg: "Usuario / Password no son correctos - correo",
      });
    }

    // SI el usuario está activo
    if (!usuario.isActive) {
      return res.status(400).json({
        msg: "Usuario / Password no son correctos - estado: false",
      });
    }

    // Verificar la contraseña
    const validPassword = bcryptjs.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "Usuario / Password no son correctos - password",
      });
    }

    // Generar el JWT
    const token = await generarJWT(usuario._id);

    res.json({
      usuario,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};
