const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const mongooseDelete = require('mongoose-delete');

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

Course.plugin(mongooseDelete, { 
  deletedAt : true, 
  overrideMethods: 'all' ,
});

module.exports = mongoose.model("Course", Course);
