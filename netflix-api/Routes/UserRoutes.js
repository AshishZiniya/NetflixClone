const {
  addToLikedMovies,
  getLikedMovies,
  removeFromLikedMovies,
} = require("../Controllers/UserController");

const router = require("express").Router();

router.get("/liked/:email", getLikedMovies);
router.post("/add", addToLikedMovies);
router.put("/delete", removeFromLikedMovies);

module.exports = router;
