const express = require('express');
const router = express.Router();

router.get('/integrations', (req, res) => {
  res.send('Liste des intégrations de services cloud');
});

module.exports = router;