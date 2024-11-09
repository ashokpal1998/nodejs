
const path = require("path");

const express = require('express');
const rootDir = require("../util/utilpth");


const hostRouter = express.Router();

hostRouter.get("/add_home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add_home.html"));
});

hostRouter.post("/add_home", (req, res, next) => {
  
   res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
});
module.exports = hostRouter;