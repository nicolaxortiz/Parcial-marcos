import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Esquema de Usuario
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: { type: String, required: true },
  isActive: { type: Boolean, default: true },
});

export const user = mongoose.model("User", UserSchema);
