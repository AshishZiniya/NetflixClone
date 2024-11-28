const express = require("express");
const cors = require("cors");
const serverless = require('serverless-http');
const userRoutes = require("../Routes/UserRoutes");
const connectDB = require("../DB-Connect/DbConnect");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/.netlify/api/user", userRoutes);

module.exports.handler = serverless(app);
