const express = require('express');
const app = express();
const productRoutes = require('./routes/products');

app.use('/products', productRoutes);

app.listen(3002, () => {
  console.log('Product service running on http://localhost:3002');
});
