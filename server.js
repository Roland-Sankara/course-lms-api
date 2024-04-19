import express from 'express'
import cors from 'cors';
import morgan from 'morgan';

import userRouter from './routes/user.router.js';
import courseRouter from './routes/course.router.js';

const app = express()

// Middlewre
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())

app.use('/users', userRouter);
app.use('/courses', courseRouter);

app.get('/',(req, res)=>{
    res.send('Welcome to the API')
})

export default app;