import express from 'express';
const router = express.Router();

// import { userController } from "../controllers";
import registerController from '../controllers/register.js';

router.post('/', registerController.register);

export default router;
