const mongoose = require('mongoose');

const achievementSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Achievement = mongoose.model("Achievement", achievementSchema);

module.exports = Achievement;