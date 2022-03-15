const express = require('express');
const { getQuizCategories, getQuizzesByCategory,getQuizList } = require("../controllers/quizController");
const router = express.Router()

router.get('/categories', getQuizCategories);
router.route("/:category").get(getQuizzesByCategory);
router.route("/:category/:subcategory").get(getQuizList);

module.exports = router;