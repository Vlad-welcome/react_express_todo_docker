import express from "express";
import * as HomeController from "../controllers/homeController.js";

const router = express.Router();

router.get("", HomeController.getFruits);
router.delete("/:id", HomeController.deleteFruit);
router.post("", HomeController.addFruit);
router.put("/:id", HomeController.updateFruit);

export default router;
