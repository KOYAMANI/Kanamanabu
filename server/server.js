const express = require ('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const quizRoutes = require('./routes/quizRoutes');
const chapterRoutes = require('./routes/chaptersRoute')
const achievementRoutes = require('./routes/achievementRoutes');
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');
const logger = require('./logger');
const path = require('path');
const app = express();
dotenv.config;

connectDB();
app.use(express.json());

app.use('/api/users', userRoutes)
app.use('/api/quizzes', quizRoutes)
app.use('/api/achievements', achievementRoutes)
app.use('/api/chapters', chapterRoutes)

// ------deployment------>>

__dirname = path.resolve();
if (process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname, "client", "build")));
    app.get("*", (req, res) =>
    res.sendFile(path.join(
            __dirname, "client", "build", "index.html"
        ))
    );
    logger.info('the app running on production');
} else {
    app.get('/', (req,res)=> {
        res.send('API is running')
    });
    logger.info('the app running on development');
}

// <<------deployment------

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8080;

app.listen(PORT, logger.info(`server started on PORT ${PORT}`))

module.exports = app;
