const express = require ('express');
const fs = require('fs');
const bodyParser = require ('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));

app.use((req, res, next) =>{
  console.log('Request Recived',req.url, req.method, req.body);
 next();
});

app.get("/", (req, res) =>{
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Myntra</title>
</head>
<body>
  <h1>Welcome to first server</h1>
  <form action="/buy_Product" method="Post">
    <input type="text" name="buy_Product" placeholder="enter your product">
    <input type  = "text" name="budget" placeholder = "Enter you budget">
    <input type = "submit">
  </form>
</body>
</html><A</A>
    `);
})
app.post('/buy_product',(req, res,) => {
  fs.writeFile('buy.json', JSON.stringify(req.body), (err) =>{
    res.statusCode = 302;
    res.setHeader("Location", "/buy_products");
    res.end();
  });
});
app.get('/buy_products',(req, res, next) =>{
  res.send(`
         <!DOCTYPE html>
        <html lang="en">
        <head>
          <title>Products</title>
        </head>
        <body>
          <h1>Product list will appear here.</h1>
        </body>
        </html>
    `);
});
app.use((req,res,next) => {
  res.statusCode = 404;
  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>page not found</title>
</head>
<body>
  <h1>404 page not found</h1>
  
</body>
</html>
    `);
});
app.listen(3000 ,() => {
  console.log('listening on serevir:  http://localhost:3000');
});