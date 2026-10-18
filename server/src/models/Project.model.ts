import mongoose, { Schema } from "mongoose";

export interface IProject {
  slug: string;
  title: string;
  category: string;
  url: string;
  previewImage: string;
  description: string;
  tags: string[];
  featured: boolean;
}

const ProjectSchema = new Schema<IProject>({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  url: { type: String, required: true },
  previewImage: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: [String], default: [] },
  featured: { type: Boolean, default: true },
});

export const Project = mongoose.model<IProject>("Project", ProjectSchema);
