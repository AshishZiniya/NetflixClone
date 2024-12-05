const express = require("express");
const cors = require("cors");
const userRoutes = require("./Routes/UserRoutes");
const connectDB = require("./DB-Connect/DbConnect");
const {
    addToLikedMovies,
    getLikedMovies,
    removeFromLikedMovies,
} = require("./Controllers/UserController");
require('dotenv').config();
const router = require("express").Router();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();


router.get("/liked/:email", getLikedMovies);
router.post("/add", addToLikedMovies);
router.put("/delete", removeFromLikedMovies);

app.use("/api/user", router);

app.listen(process.env.PORT, () => {
    console.log('Server Started Successfully');
});