const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Parfum A', price: 100 },
    { id: 2, name: 'Parfum B', price: 120 }
  ]);
});

module.exports = router;
