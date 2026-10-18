import mongoose, { Schema } from "mongoose";

export interface IPlan {
  name: string;
  price: number;
  cadence: string;
  tagline: string;
  featured: boolean;
  accent: string;
  features: string[];
}

const PlanSchema = new Schema<IPlan>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  cadence: { type: String, default: "project" },
  tagline: { type: String, required: true },
  featured: { type: Boolean, default: false },
  accent: { type: String, default: "#c8f542" },
  features: { type: [String], default: [] },
});

export const Plan = mongoose.model<IPlan>("Plan", PlanSchema);
