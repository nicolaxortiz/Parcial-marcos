import { Router } from "express";
import { check } from "express-validator";

import { validation } from "../middlewares/validar.js";
import { login } from "../controllers/auth.js";

export const authRouter = Router();

authRouter.post(
  "/login",
  [
    check("email", "El correo es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validation,
  ],
  login
);
