import express from "express";
const router = express.Router();

// import { userController } from "../controllers";
import questionController from "../controllers/question.js";

router.get('/', questionController.getAllQuestions);
// router.get('/:id', questionController.getMyQuestions);
router.post('/:id', questionController.createQuestion);
// router.delete('/:id/:id2', questionController.deleteQuestion);
router.delete('/:id', questionController.deleteQuestion);
router.patch('/:id', questionController.updateQuestion);

export default router;