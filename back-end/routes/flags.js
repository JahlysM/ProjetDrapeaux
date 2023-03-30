import express from "express";
const router = express.Router();
import flagsController from "../controllers/flags.js";

router.get('/', flagsController.getAllFlags);

export default router;