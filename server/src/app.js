import "dotenv/config";

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import cookieParser from "cookie-parser";
import logger from "morgan";
// import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler.js";

import initDB from "./config/initDB.js";

import homeRouter from "./routes/homeRouter.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use("./uploads", express.static("uploads"));
// app.use(cors());

app.use(errorHandler);

// ── API ──
app.use("/api/home", homeRouter);

// ── Статика React ──
const staticDir = path.join(__dirname, "..", "public");
app.use(express.static(staticDir));

// ── SPA-fallback: всё, что не /api и не файл → index.html ──
app.get("*", (req, res) => {
  res.sendFile(path.join(staticDir, "index.html"));
});

await initDB();

export default app;
