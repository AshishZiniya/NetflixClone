const express = require("express");
const cors = require("cors");
const userRoutes = require("./Routes/UserRoutes");
const connectDB = require("./DB-Connect/DbConnect");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/user", userRoutes);

app.listen(5000, () => {
    console.log("server started on port 5000");
});
