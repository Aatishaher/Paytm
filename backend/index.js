// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");
const mongoose = require("mongoose");
const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3000, () => {
    console.log("Server started at port 3000");
})