const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydata");
    console.log("connect successfully");
  } catch (err) {
    console.log("connect failed with error >>> ", err);
  }
}

module.exports = { connect };
