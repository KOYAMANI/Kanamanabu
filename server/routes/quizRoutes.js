const express = require('express');
const { getQuizCategories, getQuizzesByCategory } = require("../controllers/quizController");

const router = express.Router()

router.get('/categories', getQuizCategories)
router.route("/:category").get(getQuizzesByCategory)

module.exports = router;