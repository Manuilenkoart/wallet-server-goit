const express = require("express");
const routeCosts = require("../routes/routeCosts");

const app = express();

app.use("/costs", routeCosts);

module.exports = app;
