const express = require('express');
const router = express.Router();

let cart = [];

router.post('/add', (req, res) => {
  const item = req.body;
  cart.push(item);
  res.json({ message: 'Item added to cart', cart });
});

router.get('/', (req, res) => {
  res.json(cart);
});

module.exports = router;
