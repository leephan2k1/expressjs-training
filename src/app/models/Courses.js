const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
  {
    name: { type: String, default: "" },
    description: String,
    image: { type: String, default: "" },
    slug: { type: String, default: null },
    videoId: { type: String, default: null },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);
