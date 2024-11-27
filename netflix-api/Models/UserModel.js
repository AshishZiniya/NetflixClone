const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  likedMovies: [
    {
      id: Number,
      name: String,
      image: String,
      genres: [String],
    },
  ],
});

module.exports = mongoose.model("users", userSchema);
