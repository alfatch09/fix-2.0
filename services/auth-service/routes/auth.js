const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { username } = req.body;
  res.json({ message: `Login successful. Welcome, ${username}!` });
});

module.exports = router;
