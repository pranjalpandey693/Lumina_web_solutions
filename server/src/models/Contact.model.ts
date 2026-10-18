import mongoose, { Schema } from "mongoose";

export interface IContact {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
  source: string;
  createdAt?: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, default: "" },
    budget: { type: String, default: "" },
    message: { type: String, default: "" },
    source: { type: String, default: "website" },
  },
  { timestamps: true }
);

export const Contact = mongoose.model<IContact>("Contact", ContactSchema);
