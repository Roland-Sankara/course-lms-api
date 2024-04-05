import express from 'express'
import cors from 'cors';
import morgan from 'morgan';

import userRouter from './routes/user.router.js';
import courseRouter from './routes/course.router.js';

const app = express()

const PORT = 5000

// Middlewre
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())

app.use('/users', userRouter);
app.use('/courses', courseRouter);

app.get('/',(req, res)=>{
    res.send('Welcome to the API')
})


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})