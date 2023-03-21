import express from "express";
const router = express.Router();

// import { userController } from "../controllers";
import userController from "../controllers/user.js";

router.get('/', userController.getAll);
router.get('/:id', userController.get);
router.post('/', userController.login);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
// router.post('/register', userController.register)

export default router;