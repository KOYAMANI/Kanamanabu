const express = require ('express');
const connectDB = require('./config/db');
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');
const logger = require('./logger');
const path = require('path');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const quizRoutes = require('./routes/quizRoutes');
const chapterRoutes = require('./routes/chaptersRoute')
const achievementRoutes = require('./routes/achievementRoutes');
const dotenv = require('dotenv').config();

const promClient = require('prom-client');
const collectDefaultMetrics = promClient.collectDefaultMetrics;
const register = new promClient.Registry();
collectDefaultMetrics({ register });

const app = express();
dotenv.config;

connectDB();
app.use(express.json());
app.use(cors());

const counter = new promClient.Counter({
    name: `node_request_duration_seconds`,
    help: `The total number of processed requests`,
    labelNames: ['method', 'route', 'status_code']
});

const histogram = new promClient.Histogram({
    name: `node_request_operation_total`,
    help: `Histogram  for duration in seconds`,
    labelNames: ['method', 'route', 'status_code'],
    buckets: [1, 2, 5, 6, 10]
});

register.setDefaultLabels({app: 'kmb-app'});
// promClient.collectDefaultMetrics({register});
// register.registerMetric(histogram)

// Routes
app.use('/api/users', userRoutes)
app.use('/api/quizzes', quizRoutes)
app.use('/api/achievements', achievementRoutes)
app.use('/api/chapters', chapterRoutes)

// const end = histogram.startTimer();
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
    // end ({route, code: res.statusCode, method: req.method})
});

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

// middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, logger.info(`server started on PORT ${PORT}`));

module.exports = app;
