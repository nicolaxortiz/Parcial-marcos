import mongoose from "mongoose";

const Schema = mongoose.Schema;

const VisitSchema = new Schema({
  costumerId: {
    type: Schema.Types.ObjectId,
    ref: "Costumer",
    required: true,
  },
  propertyId: {
    type: Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },
  date: { type: String, required: true },
  hour: { type: String, required: true },
  comment: { type: String, required: true },
});

export const visit = mongoose.model("Visit", VisitSchema);
