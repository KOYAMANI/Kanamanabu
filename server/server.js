const express = require ('express');
const questions = require('./data/questions')
const categories = require("./data/quizCategory");
const achievements = require('./data/achievements')
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const quizRoutes = require('./routes/quizRoutes')
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');
const path = require('path');
const app = express();
dotenv.config;

connectDB();
app.use(express.json());

app.get('/', (req,res)=> {
    res.send('API is running')
});

app.get('/api/questions/:category', (req, res) => {
    const filteredByCategory = questions.filter((question) =>
    question.category.main == req.params.category)
    res.send(filteredByCategory)
})

app.get('/api/questions/:category/:subcategory', (req, res) => {
    const filteredByCategory = questions.filter((question) =>
    question.category.main == req.params.category )

    const filteredBySubCategory = filteredByCategory.filter((question) =>
    question.category.sub == req.params.subcategory )

    res.send(filteredBySubCategory)
})

app.get('/api/achievements', (req, res) => {
    res.json(achievements)
})

app.get('/api/categories', (req, res) => {
    res.json(categories)
})

app.use('/api/users', userRoutes)
app.use('/api/notes', noteRoutes)
app.use('/api/quizzes', quizRoutes)

// ------deployment------>>

__dirname = path.resolve();
if (process.env.NODE_ENV==="production"){
    console.log('production env')
    app.use(express.static(path.join(__dirname,"/client/build")));
    app.get("*", (req, res) =>
    res.sendFile(path.resolve(
            __dirname, "client", "build", "index.html"
        ))
    );
} else {
    console.log('dev env')
    app.get('/', (req,res)=> {
        res.send('API is running')
    });
}

// <<------deployment------

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`server started on PORT ${PORT}`))



// app.get('/api/notes', (req,res)=> {
//     res.json(notes)
// });

// app.get('/api/notes/:id', (req,res)=> {
//     const note = notes.find((n)=> n._id == req.params.id)
//     res.send(note)
// });
