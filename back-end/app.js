import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use((req, res, next) =>{
    res.setHeader('Access-Controll-Allow-Origin', '*')
    res.setHeader('Access-Controll-Allow-Headers', 'Origin,X-Requested-With,Content,Accept,Content-Type,Authorization')
    res.setHeader('Access-Controll-Allow-Methods', 'GET,POST,PUT,DELETE')
    next()
})

app.get('/', (req, res)=>{
    res.status(200).json({
        message: "server is working !"
    })
})

import registerRoutes from './routes/register.js';
import userRoutes from './routes/user.js';
import loginRoutes from './routes/login.js';
import quizRoutes from './routes/quiz.js';

// app.use('/post', postRoutes);
app.use('/user', userRoutes);
app.use('/register', registerRoutes);
app.use('/login', loginRoutes);
app.use('/quiz', quizRoutes);


app.listen(process.env.SERVER_PORT, () => {
    console.log("connecté");
});

export default app