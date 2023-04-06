import "dotenv/config";
import express from "express";
import cors from "cors";
import registerRoutes from './routes/register.js';
import userRoutes from './routes/user.js';
import loginRoutes from './routes/login.js';
import quizRoutes from './routes/quiz.js';
import questionRoutes from './routes/question.js';
import flagsRoutes from './routes/flags.js';
import scoreRoute from './routes/score.js';
import path from 'path';
import { join } from 'path';
import { fileURLToPath } from 'url';

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(join(__dirname, 'public')));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type', "authorization"],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }
  app.use(cors(corsOptions));



// app.use('/post', postRoutes);
app.use('/user', userRoutes);
app.use('/register', registerRoutes);
app.use('/login', loginRoutes);
app.use('/quiz', quizRoutes);
app.use('/question', questionRoutes);
app.use('/flags', flagsRoutes);
app.use('/score', scoreRoute);


app.listen(process.env.SERVER_PORT, () => {
    console.log("connecté");
});

export default app