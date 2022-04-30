const Chapters = require('../data/chapter');
const asyncHandler = require('express-async-handler')

//TODO fetch data from the DB instead of hardcoded js file
const getChapters = asyncHandler(
    async(req, res) => {
        const chapters = await Chapters.filter((chapter)=> chapter.title === req.params.title);
        res.json(chapters);
    }
);



module.exports = {
    getChapters,
};