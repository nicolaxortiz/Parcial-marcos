import express from "express";
import { visitsController } from "../controllers/visits.js";

export const visitsRouter = express.Router();

visitsRouter.post("/create", visitsController.createVisit);
visitsRouter.get("/:id", visitsController.getVisitsByProperty);
