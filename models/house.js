import mongoose from "mongoose";
import { property } from "./property.js";

const Schema = mongoose.Schema;

// Esquema de casa
const HouseSchema = new Schema({
  zone: { type: String, required: true },
  stays: {
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    toiletrooms: { type: Number, required: true },
    kitchens: { type: Number, required: true },
    balcony: { type: Boolean, required: true },
  },
  features: {
    gas: { type: Boolean, required: true },
    armoredDoor: { type: Boolean, required: true },
    parquet: { type: Boolean, required: true },
  },
});

export const house = property.discriminator("House", HouseSchema);
