import express from "express";
import { Pool } from "../database/dbConfig";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("contact");
});

export default router;
