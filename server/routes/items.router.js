const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
    const query = `SELECT * FROM items ORDER BY inserted_at DESC;`;
    pool.query(query)
      .then(result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all items', err);
        res.sendStatus(500)
      })
  });

  module.exports = router;