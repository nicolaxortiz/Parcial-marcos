import mongoose from "mongoose";
import { property } from "./property";

const Schema = mongoose.Schema;

const VisitSchema = new Schema({
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

export const visit = property.discriminator("Visit", VisitSchema);
