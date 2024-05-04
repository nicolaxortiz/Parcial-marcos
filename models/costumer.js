import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Esquema de cliente
const CostumerSchema = new Schema({
  lastName: { type: String, required: true },
  name: { type: String, required: true },
  document: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  cellphone: { type: Number, required: true, unique: true },
  city: { type: String, required: true },
});

export const costumer = mongoose.model("Costumer", CostumerSchema);
