import express from "express";
const router = express.Router();

// import { userController } from "../controllers";
import registerController from "../controllers/login.js";

router.post('/', registerController.login);

export default router;