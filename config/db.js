const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Mongo Database is connected and working!");
  } catch (error) {
    console.error(error.message);
    // process.exit exists if there is a failure
    process.exit(1);
  }
};
module.exports = connectToMongoDb;
