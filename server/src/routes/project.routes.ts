import { Router } from "express";
import { ProjectController } from "../controllers/project.controller";

const router = Router();
router.get("/", ProjectController.list);
router.get("/products", ProjectController.products);
export default router;
