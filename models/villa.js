import mongoose from "mongoose";
import { property } from "./property.js";

const Schema = mongoose.Schema;

// Esquema de villa
const VillaSchema = new Schema({
  parcelSize: { type: Number, required: true },
  urbanization: { type: String, required: true },
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

export const villa = property.discriminator("Villa", VillaSchema);
