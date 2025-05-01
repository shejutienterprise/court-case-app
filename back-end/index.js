const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Route loading with error handling
try {
  console.log('Initializing routes...');
  app.use('/users', require('./routes/users'));
  app.use('/subscriptions', require('./routes/subscriptions'));
  app.use('/court', require('./routes/court'));
  app.use('/casetype', require('./routes/casetype'));
  app.use('/cases', require('./routes/cases'));
  app.use('/casedetail', require('./routes/casedetail'));
  app.use('/assistant', require('./routes/assistant'));
} catch (err) {
  console.error('Route initialization failed:', err);
  process.exit(1);
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('✅ Court Case Diary Management API is running...');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});