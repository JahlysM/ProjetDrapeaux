import express from "express";
const router = express.Router();

import quizController from "../controllers/quiz.js";

// utilisé 100%
router.get('/myQuizes/:id', quizController.findMyQuiz);

router.get('/:id', quizController.findAllQuiz);

router.post('/', quizController.createQuiz);

// utilisé 100%
router.delete('/:id', quizController.deleteQuiz);

// utilisé 100%
router.put('/:id', quizController.updateQuiz);

// en test
router.patch('/:id', quizController.publishQuiz);

export default router;