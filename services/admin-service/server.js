const express = require('express');
const app = express();
const adminRoutes = require('./routes/admin');

app.use('/admin', adminRoutes);

app.listen(3004, () => {
  console.log('Admin service running on http://localhost:3004');
});
