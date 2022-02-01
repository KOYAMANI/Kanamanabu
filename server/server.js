const express = require ('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const quizRoutes = require('./routes/quizRoutes');
const achievementRoutes = require('./routes/achievementRoutes');
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');
const path = require('path');
const app = express();
dotenv.config;

connectDB();
app.use(express.json());

app.use('/api/users', userRoutes)
app.use('/api/quizzes', quizRoutes)
app.use('/api/achievements', achievementRoutes)

app.use('/api/notes', noteRoutes)

// ------deployment------>>

__dirname = path.resolve();
if (process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname, "client", "build")));
    app.get("*", (req, res) =>
    res.sendFile(path.join(
            __dirname, "client", "build", "index.html"
        ))
    );
} else {
    app.get('/', (req,res)=> {
        res.send('API is running')
    });
}

// <<------deployment------

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`server started on PORT ${PORT}`))

module.exports = app;
