const express = require('express');
const { getMainMenuSelections } = require("../controllers/selectionsController");

const router = express.Router()


router.route("/:alphabet").get(getMainMenuSelections)

module.exports = router;