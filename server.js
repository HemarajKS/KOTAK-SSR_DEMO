const { createRequestHandler } = require('@expo/server/adapter/express');
const express = require('express');
const path = require('path');

const app = express();

// Enable CORS for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname, 'dist/client')));

// API routes
app.get('/api/data', async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 200));
  res.json({
    users: [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ],
    timestamp: new Date().toISOString()
  });
});

// Handle SSR for all other routes
app.get('*', createRequestHandler({
  build: require('./dist/server'),
}));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
  console.log('📦 Server-side rendering enabled');
  console.log('⚡ React Server Components active');
});