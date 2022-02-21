const express = require('express');
const { getChapters } = require("../controllers/chaptersController");

const router = express.Router()


router.route("/:title").get(getChapters)

module.exports = router;