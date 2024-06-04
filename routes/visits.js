import express from "express";
import { visitsController } from "../controllers/visits.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

export const visitsRouter = express.Router();

visitsRouter.post("/create", validarJWT, visitsController.createVisit);
visitsRouter.get("/:id", validarJWT, visitsController.getVisitsByProperty);
