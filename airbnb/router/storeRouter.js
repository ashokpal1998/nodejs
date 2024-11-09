const path = require('path');
const express = require('express');
const rootDir = require("../util/utilpth");

const storeRouter = express.Router();

storeRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});
module.exports = storeRouter;
