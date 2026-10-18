import mongoose from "mongoose";
import { env } from "./env";
import { Contact, IContact } from "../models/Contact.model";
import { Plan, IPlan } from "../models/Plan.model";
import { Project, IProject } from "../models/Project.model";
import { seedPlans, seedProjects } from "../data/seed";

export type MemoryStore = {
  contacts: IContact[];
  projects: IProject[];
  plans: IPlan[];
};

export const memory: MemoryStore = {
  contacts: [],
  projects: seedProjects,
  plans: seedPlans,
};

export let usingMemory = false;

export async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(env.mongoUri, { serverSelectionTimeoutMS: 2500 });
    usingMemory = false;
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      await Project.insertMany(seedProjects);
      await Plan.insertMany(seedPlans);
    }
    console.log("MongoDB connected — MVC models ready");
  } catch (error) {
    usingMemory = true;
    console.warn(
      "MongoDB unavailable — falling back to in-memory store so the site still runs."
    );
    if (error instanceof Error) {
      console.warn(error.message);
    }
  }
}

export const db = {
  async listProjects() {
    if (usingMemory) return memory.projects;
    return Project.find().lean();
  },
  async listPlans() {
    if (usingMemory) return memory.plans;
    return Plan.find().lean();
  },
  async createContact(payload: IContact) {
    if (usingMemory) {
      memory.contacts.unshift({ ...payload, createdAt: new Date() });
      return memory.contacts[0];
    }
    return Contact.create(payload);
  },
};
