
const Selections = require('../data/mainMenuSelection');
const asyncHandler = require('express-async-handler')

const getMainMenuSelections = asyncHandler(
    async(req, res) => {
        const selections = await Selections.sort((s)=> s.alphabet === req.params.alphabet);
        res.json(selections);
    }
);



module.exports = {
    getMainMenuSelections,

};