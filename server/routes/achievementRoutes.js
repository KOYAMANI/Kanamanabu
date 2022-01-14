const express = require('express');
const { addAchievement, getAchievements} = require("../controllers/achievementController");
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router()

router.get('/', protect, getAchievements);
router.post('/add', protect, addAchievement);

module.exports = router;