import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Esquema de Inmueble
const PropertySchema = new Schema({
  reference: { type: Number, required: true, unique: true },
  type: { type: String }, // piso nuevo, piso de ocasión, villa, casa, local
  area: { type: Number, required: true }, // en m^2
  address: { type: String, required: true },
  offerMode: { type: String, required: true },
  sellingPrice: { type: Number, required: true },
  rentalPrice: { type: Number, required: true },
  owner: {
    name: { type: String, required: true },
    cellphone: { type: Number, required: true },
  },
  office: { type: Schema.Types.ObjectId, ref: "Office", required: true },
  visits: [
    {
      costumerId: {
        type: Schema.Types.ObjectId,
        ref: "Costumer",
        required: true,
      },
      date: { type: String, required: true },
      hour: { type: String, required: true },
      comment: { type: String, required: true },
    },
  ],
});

export const property = mongoose.model("Property", PropertySchema);
