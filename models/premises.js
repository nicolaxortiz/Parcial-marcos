import mongoose from "mongoose";
import { property } from "./property.js";

const Schema = mongoose.Schema;

// Esquema de local
const PremisesSchema = new Schema({
  zone: { type: String, required: true },
  features: {
    frontDoors: { type: Number, required: true },
    diaphone: { type: Boolean, required: true },
    air: { type: Boolean, required: true },
  },
});

export const premises = property.discriminator("Premises", PremisesSchema);
