import express from "express";
const router = express.Router();
import jwt from "jsonwebtoken";

// import { userController } from "../controllers";
import quizController from "../controllers/quiz.js";

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403);
        req.user = user
        next()
    })
}

router.get('/', authenticateToken, quizController.findMyQuiz);

export default router;