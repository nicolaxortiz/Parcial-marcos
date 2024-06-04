import { Router } from "express";
import { check } from "express-validator";
import { validation } from "../middlewares/validar.js";

import { userController } from "../controllers/user.js";

export const userRouter = Router();

userRouter.get("/:id", userController.getUsuarioById);

userRouter.post(
  "/create",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El correo no es válido").isEmail(),
    check("password", "La contraseña es obligatoria").isLength({ min: 6 }),
    check("rol", "El rol es obligatorio").not().isEmpty(),
    validation,
  ],
  userController.createUser
);
