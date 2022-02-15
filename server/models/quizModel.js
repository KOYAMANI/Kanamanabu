const mongoose = require('mongoose');

const quizSchema = mongoose.Schema(
    {
        question: {
            type: String,
            required: true,
        },
        category:{
            type: String,
            required: true,
        },
        subcategory:{
            type: String,
            required: true,
        },
        answers: {
            type: Array,
            required: true,
        },
        correct: {
            type: String,
            required: true,
        },
    },
);

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;