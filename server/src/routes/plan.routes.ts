import { Router } from "express";
import { PlanController } from "../controllers/plan.controller";

const router = Router();
router.get("/", PlanController.list);
export default router;
