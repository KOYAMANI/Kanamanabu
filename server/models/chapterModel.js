const mongoose = require('mongoose');

const chapterSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        consonant: {
            type: String,
            required: false,
        },
        letters: {
            type: Array,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const Chapter = mongoose.model("Chapter", chapterSchema);

module.exports = Chapter;