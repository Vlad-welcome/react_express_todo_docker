import express from "express";
import * as HomeController from "../controllers/homeController.js";

const router = express.Router();

router.get("", HomeController.getFruits);

export default router;
