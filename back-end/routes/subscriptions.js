const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'subscription API Working' });
});

module.exports = router;