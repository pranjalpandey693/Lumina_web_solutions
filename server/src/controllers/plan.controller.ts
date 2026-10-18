import { Request, Response } from "express";
import { db } from "../config/db";

export const PlanController = {
  async list(_req: Request, res: Response) {
    const plans = await db.listPlans();
    return res.json({ ok: true, data: plans });
  },
};
