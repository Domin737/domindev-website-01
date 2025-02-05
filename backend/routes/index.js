import { Router } from "express";
import projectRoutes from "./projects.js";
import userRoutes from "./users.js";

const router = Router();

router.use("/projects", projectRoutes);
router.use("/users", userRoutes);

export default router;
