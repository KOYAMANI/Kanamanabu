const express = require ('express');
// const notes = require('./data/notes');
const quizes = require('./data/quizes')
const categories = require("./data/quizCategory");
const achievements = require('./data/achievements')
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');

const app = express();
dotenv.config;

connectDB();
app.use(express.json());

app.get('/', (req,res)=> {
    res.send('API is running')
});

// app.get('/api/notes', (req,res)=> {
//     res.json(notes)
// });

// app.get('/api/notes/:id', (req,res)=> {
//     const note = notes.find((n)=> n._id == req.params.id)
//     res.send(note)
// });

app.get('/api/quizes/:category', (req, res) => {
    const quiz = quizes.find((q)=> q.category == req.params.category)
    res.send(quiz)
})

app.get('/api/achievements', (req, res) => {
    res.json(achievements)
})

app.get('/api/categories', (req, res) => {
    res.json(categories)
})

app.use('/api/users', userRoutes)
app.use('/api/notes', noteRoutes)


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`server started on PORT ${PORT}`))