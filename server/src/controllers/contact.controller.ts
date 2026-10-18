import { Request, Response } from "express";
import { db } from "../config/db";

export const ContactController = {
  async create(req: Request, res: Response) {
    const { name, email, phone, budget, message, source } = req.body as {
      name?: string;
      email?: string;
      phone?: string;
      budget?: string;
      message?: string;
      source?: string;
    };

    if (!name?.trim() || !email?.trim()) {
      return res.status(400).json({
        ok: false,
        error: "Name and email are required.",
      });
    }

    const saved = await db.createContact({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "",
      budget: budget || "",
      message: message?.trim() || "",
      source: source || "website",
    });

    return res.status(201).json({
      ok: true,
      message: "Request received. We will reach out shortly.",
      data: saved,
    });
  },
};
