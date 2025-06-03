const express = require('express');
const router = express.Router();

router.get('/orders', (req, res) => {
  res.json([
    { id: 1, customer: 'Ali', total: 100 },
    { id: 2, customer: 'Budi', total: 200 }
  ]);
});

module.exports = router;
