const express = require("express");
const cors = require("cors");
const userRoutes = require("./Routes/UserRoutes");
const connectDB = require("./DB-Connect/DbConnect");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
    console.log('Connected to the Database & Listening on port', process.env.PORT);
    console.log('Server Started Successfully');
});