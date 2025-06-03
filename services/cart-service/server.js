const express = require('express');
const app = express();
const cartRoutes = require('./routes/cart');

app.use(express.json());
app.use('/cart', cartRoutes);

app.listen(3003, () => {
  console.log('Cart service running on http://localhost:3003');
});
