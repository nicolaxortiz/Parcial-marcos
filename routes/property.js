import express from "express";
import { propertyController } from "../controllers/property.js";
import { check } from "express-validator";
import { validation } from "../middlewares/validar.js";
import { propertyValidation } from "../validation/property.js";
import { validarJWT } from "../middlewares/validar-jwt.js";

export const propertyRouter = express.Router();

propertyRouter.get(
  "/getByFilter/:filter",
  [
    validarJWT,
    check("filter").custom(propertyValidation.filterValidator),
    validation,
  ],
  propertyController.getByFilter
);

propertyRouter.get("/getAll", validarJWT, propertyController.getAll);

propertyRouter.get(
  "/getByReference/:reference",
  [
    validarJWT,
    check("reference").custom(propertyValidation.referenceValidator),
    validation,
  ],
  propertyController.getByReference
);

propertyRouter.post(
  "/createVilla",

  [
    validarJWT,
    check("reference").custom(propertyValidation.referenceValidator),
    check("type").custom(propertyValidation.typeValidator),
    check("area").custom(propertyValidation.areaValidator),
    check("address").custom(propertyValidation.addressValidator),
    check("offerMode").custom(propertyValidation.offerModeValidator),
    check("sellingPrice").custom(propertyValidation.priceValidator),
    check("rentalPrice").custom(propertyValidation.priceValidator),
    check("owner").custom(propertyValidation.ownerValidator),
    check("visits").custom(propertyValidation.visitValidator),
    check("parcelSize").custom(propertyValidation.parcelSizeValidator),
    check("urbanization").custom(propertyValidation.urbanizationValidator),
    check("stays").custom(propertyValidation.staysValidator),
    check("features").custom(propertyValidation.featuresValidator),
    validation,
  ],
  propertyController.createVilla
);

propertyRouter.post(
  "/createApartment",
  [
    validarJWT,
    check("reference").custom(propertyValidation.referenceValidator),
    check("type").custom(propertyValidation.typeValidator),
    check("area").custom(propertyValidation.areaValidator),
    check("address").custom(propertyValidation.addressValidator),
    check("offerMode").custom(propertyValidation.offerModeValidator),
    check("sellingPrice").custom(propertyValidation.priceValidator),
    check("rentalPrice").custom(propertyValidation.priceValidator),
    check("owner").custom(propertyValidation.ownerValidator),
    check("visits").custom(propertyValidation.visitValidator),
    check("zone").custom(propertyValidation.zoneValidator),
    check("stays").custom(propertyValidation.staysValidator),
    check("features").custom(propertyValidation.featuresValidator),
    validation,
  ],
  propertyController.createApartment
);

propertyRouter.post(
  "/createHouse",
  [
    validarJWT,
    check("reference").custom(propertyValidation.referenceValidator),
    check("type").custom(propertyValidation.typeValidator),
    check("area").custom(propertyValidation.areaValidator),
    check("address").custom(propertyValidation.addressValidator),
    check("offerMode").custom(propertyValidation.offerModeValidator),
    check("sellingPrice").custom(propertyValidation.priceValidator),
    check("rentalPrice").custom(propertyValidation.priceValidator),
    check("owner").custom(propertyValidation.ownerValidator),
    check("visits").custom(propertyValidation.visitValidator),
    check("zone").custom(propertyValidation.zoneValidator),
    check("stays").custom(propertyValidation.staysValidator),
    check("features").custom(propertyValidation.featuresValidator),
    validation,
  ],
  propertyController.createHouse
);

propertyRouter.post(
  "/createPremises",
  [
    validarJWT,
    check("reference").custom(propertyValidation.referenceValidator),
    check("type").custom(propertyValidation.typeValidator),
    check("area").custom(propertyValidation.areaValidator),
    check("address").custom(propertyValidation.addressValidator),
    check("offerMode").custom(propertyValidation.offerModeValidator),
    check("sellingPrice").custom(propertyValidation.priceValidator),
    check("rentalPrice").custom(propertyValidation.priceValidator),
    check("owner").custom(propertyValidation.ownerValidator),
    check("visits").custom(propertyValidation.visitValidator),
    validation,
  ],
  propertyController.createPremises
);
