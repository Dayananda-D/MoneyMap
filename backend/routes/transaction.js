const express = require('express');
const router = express.Router();

router.get('/transactions', (req, res) => {
  res.json({ message: 'Fetching transactions...' });
});

router.post('/transactions', (req, res) => {
  res.json({ message: 'Transaction added.' });
});

module.exports = router;
