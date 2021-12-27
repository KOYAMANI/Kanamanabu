const mongoose = require('mongoose');

const achievementSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Achievement", achievementSchema);

module.exports = Achievement;