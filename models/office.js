import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Esquema de Oficina
const OfficeSchema = new Schema({
  officeNumber: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  cellphone: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
});

export const office = mongoose.model("Office", OfficeSchema);
