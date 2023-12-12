import { Schema, model } from "mongoose";

const serviceSchema = new Schema({
  service: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
});

const Service = model("Service", serviceSchema);

export default Service;
