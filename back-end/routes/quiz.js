import express from "express";
const router = express.Router();

// import { userController } from "../controllers";
import quizController from "../controllers/quiz.js";
import questionController from "../controllers/question.js";

// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
//     if(token == null) return res.sendStatus(401);
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if(err) return res.sendStatus(403);
//         req.user = user
//         next()
//     })
// }

router.get('/:id/:id2', questionController.getMyQuestions);
router.get('/:id', quizController.findMyQuiz);
router.get('/', quizController.findAllQuiz);
router.post('/', quizController.createQuiz);
// router.post('/:id', quizController.createQuestion);
router.get('/all', quizController.getAllQuestions);
router.delete('/:id', quizController.deleteQuiz);
router.put('/:id', quizController.updateQuiz);

export default router;