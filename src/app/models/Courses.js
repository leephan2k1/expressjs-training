const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: { type: String, default: "" },
  description: String,
  image: String,
  slug: { type: String, default: null },
  videoId: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);
