const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://AshishZiniya:Ashish1234@cluster0.q5rzzxt.mongodb.net/netflixData?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await mongoose.set('strictQuery', true);
    console.log("Connection established successfully to database");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
