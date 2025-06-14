const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');

app.use(express.json());
app.use('/auth', authRoutes);

app.listen(3001, () => {
  console.log('Auth service running on http://localhost:3001');
});
