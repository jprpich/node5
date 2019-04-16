var express = require('express');
var app = express();


app.get('/products', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json([
    { "_id": "xxxx", "name": "Product 1", "price": 12.56 },
    { "_id": "yyyy", "name": "Product 2", "price": 10.99 }
  ]);
});

app.listen(3000, () => console.log('Listening on port 3000!'));