import express from "express";
const router = express.Router();

// import { userController } from "../controllers";
import questionController from "../controllers/question.js";

router.get('/:id', questionController.getMyQuestions);
router.post('/:quizId', questionController.createQuestion);
router.delete('/:id', questionController.deleteQuestion);
router.patch('/:id', questionController.updateQuestion);

export default router;