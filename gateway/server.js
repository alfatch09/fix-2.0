const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/auth', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/products', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
app.use('/cart', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));
app.use('/admin', createProxyMiddleware({ target: 'http://localhost:3004', changeOrigin: true }));

app.listen(3000, () => {
  console.log('Gateway running on http://localhost:3000');
});
