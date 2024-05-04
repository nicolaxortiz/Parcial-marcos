import express from "express";
import { officeController } from "../controllers/office.js";
import { check } from "express-validator";
import { validation } from "../middlewares/validar.js";
import { officeValidation } from "../validation/office.js";

export const officeRouter = express.Router();

officeRouter.get("/getAll", officeController.getAll);

officeRouter.post(
  "/createOffice",
  [
    check("officeNumber").custom(officeValidation.officeNumberValidator),
    check("name").custom(officeValidation.nameValidator),
    check("city").custom(officeValidation.cityValidator),
    check("address").custom(officeValidation.addressValidator),
    check("cellphone").custom(officeValidation.cellphoneValidator),
    validation,
  ],
  officeController.createOffice
);
officeRouter.put(
  "/updateOffice/:id",
  [
    check("id", "No es un id valido").isMongoId(),
    check("officeNumber").custom(officeValidation.officeNumberValidator),
    check("name").custom(officeValidation.nameValidator),
    check("city").custom(officeValidation.cityValidator),
    check("address").custom(officeValidation.addressValidator),
    check("cellphone").custom(officeValidation.cellphoneValidator),
    validation,
  ],
  officeController.updateOffice
);

officeRouter.delete(
  "/deleteOffice/:id",
  [check("id", "No es un id valido").isMongoId(), validation],
  officeController.deleteOffice
);
