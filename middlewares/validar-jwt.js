import { response, request } from "express";
import jwt from "jsonwebtoken";
import { user } from "../models/user.js";

export const validarJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la petición",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    // leer el usuario que corresponde al uid
    const usuario = await user.findById(uid);

    if (!usuario) {
      return res.status(401).json({
        msg: "Token no válido - usuario no existe DB",
      });
    }

    // Verificar si el uid tiene estado true
    if (!usuario.isActive) {
      return res.status(401).json({
        msg: "Token no válido - usuario con estado: false",
      });
    }

    req.usuario = usuario;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Token no válido",
    });
  }
};
