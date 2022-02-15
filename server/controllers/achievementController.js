const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const Achievement = require('../models/achievementModel');

const addAchievement = asyncHandler(
    async(req, res, next) => {
        const { title } = req.body;
        const user = await User.findById(req.user._id);

        const achievement = await Achievement.create({
            title : title,
            _id: req.user._id
        })

        if(achievement){
            res.status(200).json({
                title:achievement.title,
                _id: user._id,
            });
        } else {
            res.status(400);
            throw new Error('Error cannot create a user')
        }

        res.json({
            title,
            user,
        });
    });

const getAchievements = asyncHandler(
    async(req, res) => {
        const achievements = await Achievement.find({_id: req.user._id});
        res.json(achievements);
    });

module.exports = {addAchievement, getAchievements};