import { Request, Response } from "express";
import { db } from "../config/db";
import { seedProducts } from "../data/seed";

export const ProjectController = {
  async list(_req: Request, res: Response) {
    const projects = await db.listProjects();
    return res.json({ ok: true, data: projects });
  },
  async products(_req: Request, res: Response) {
    return res.json({ ok: true, data: seedProducts });
  },
};
