const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1", require("./routes/UserRoute"));

module.exports = app;

