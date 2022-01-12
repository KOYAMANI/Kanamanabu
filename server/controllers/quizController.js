const Category = require('../models/quizCategoryModel');
const Quiz = require('../models/quizModel');
const asyncHandler = require('express-async-handler')

const getQuizCategories = asyncHandler(
    async(req, res) => {
        const categories = await Category.find();
        res.json(categories);
    }
);


const getQuizzesByCategory = asyncHandler(
    async(req, res) => {
        const quizzes = await Quiz.find({category: req.params.category});
        if (quizzes) {
            res.json(quizzes);
        } else {
            res.status(404);
            throw new Error('Quizzes not found');
        }
    }

);

module.exports = {
    getQuizCategories,
    getQuizzesByCategory
};