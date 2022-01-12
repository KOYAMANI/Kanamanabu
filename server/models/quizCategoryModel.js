const mongoose = require('mongoose');

const quizCategorySchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        category: {
            type: String,
            required: true,
        },
        subcategory: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
        },
    },
);

const Category = mongoose.model("Category", quizCategorySchema);

module.exports = Category;