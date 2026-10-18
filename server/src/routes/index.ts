import { Router } from "express";
import contactRoutes from "./contact.routes";
import projectRoutes from "./project.routes";
import planRoutes from "./plan.routes";

const router = Router();

router.get("/health", (_req, res) => {
  res.json({ ok: true, service: "portfolio-api" });
});

router.use("/contacts", contactRoutes);
router.use("/projects", projectRoutes);
router.use("/plans", planRoutes);

export default router;
