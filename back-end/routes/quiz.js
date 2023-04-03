import express from "express";
const router = express.Router();

import quizController from "../controllers/quiz.js";

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


// utilisé 100%
router.get('/:id', quizController.findMyQuiz);

router.get('/', quizController.findAllQuiz);
router.post('/', quizController.createQuiz);

// utilisé 100%
router.delete('/:id', quizController.deleteQuiz);

// utilisé 100%
router.put('/:id', quizController.updateQuiz);

export default router;