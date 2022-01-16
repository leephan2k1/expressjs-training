const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const mongooseDelete = require("mongoose-delete");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Course = new Schema(
  {
    _id: { type: Number },
    name: { type: String, default: "" },
    description: String,
    image: { type: String, default: "" },
    slug: { type: String, default: null },
    videoId: { type: String, default: null },
  },
  {
    _id: false,
    timestamps: true,
  }
);

Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});
Course.plugin(AutoIncrement);

module.exports = mongoose.model("Course", Course);
