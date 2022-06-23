require('dotenv').config();
const express = require("express");
const cors = require("cors")
const connection = require("./db")
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

//connection stuffs
connection();

//express stuffs
const app = express();
app.use(express.json)

//cors stuff
app.use(cors());

//routes stuff
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.port || 8080;
app.listen(port, () => {
    console.log(`listening on port ${port}..`)
})