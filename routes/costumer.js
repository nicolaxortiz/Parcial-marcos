import express from "express";
import { costumerController } from "../controllers/costumer.js";
import { check } from "express-validator";
import { validation } from "../middlewares/validar.js";
import { costumerValidation } from "../validation/costumer.js";

export const costumerRouter = express.Router();

costumerRouter.post(
  "/createCostumer",
  [
    check("name").custom(costumerValidation.nameValidator),
    check("lastName").custom(costumerValidation.lastNameValidator),
    check("document").custom(costumerValidation.documentValidator),
    check("email").custom(costumerValidation.emailValidator),
    check("cellphone").custom(costumerValidation.cellphoneValidator),
    check("city").custom(costumerValidation.cityValidator),
    check("email").custom(costumerValidation.emailValidator),
    validation,
  ],
  costumerController.createCostumer
);

costumerRouter.put(
  "/updateCostumer/:id",
  [
    check("id", "No es un id valido").isMongoId(),
    check("name").custom(costumerValidation.nameValidator),
    check("lastName").custom(costumerValidation.lastNameValidator),
    check("document").custom(costumerValidation.documentValidator),
    check("email").custom(costumerValidation.emailValidator),
    check("cellphone").custom(costumerValidation.cellphoneValidator),
    check("city").custom(costumerValidation.cityValidator),
    check("email").custom(costumerValidation.emailValidator),
    validation,
  ],
  costumerController.updateCostumer
);
