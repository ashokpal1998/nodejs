const path = require('path');
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const usehostRouter = require("./router/hostRouter");
const useStoreRouter = require("./router/storeRouter");
const rootDir = require("./util/utilpth");

const app = express();


app.use(express.static(path.join(rootDir, "public")));
app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(usehostRouter);
app.use(useStoreRouter);
app.set('view engine', 'ejs');
app.set('views', 'views');



app.use((req, res, next) => {
  res.send(`
          <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>page not found</title>
</head>
<body>
  <h1> 404 page not found</h1>
</body>
</html>
    `);
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
