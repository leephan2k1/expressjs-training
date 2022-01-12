module.exports = {
  multipleMongooseToObject: (mongooseArray) => {
    return mongooseArray.map((e) => e.toObject());
  },
  mongooseToObject: (mongoose) => {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
