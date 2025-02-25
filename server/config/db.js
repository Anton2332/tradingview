const mongoose = require('mongoose');
require('dotenv').config();

const db = process.env.mongoURI;

///////////// connect db //////////////////////
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    // ------------------------
    process.exit(1);
  }
};

module.exports = connectDB;
