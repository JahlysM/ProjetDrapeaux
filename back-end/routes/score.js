import express from 'express';
import scoreController from '../controllers/score.js';
const router = express.Router();

router.post('/:id/:quizId', scoreController.createScore);

export default router;
