const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const query = `
  SELECT items.id, items.title, items.author, items.cover, items.media_type, items.comments, "user".email_address
    FROM items
    JOIN "user" ON items.user_id = "user".id
    ORDER BY items.inserted_at
    DESC;
  `;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all items', err);
      res.sendStatus(500)
    })
});

router.get('/recent', (req, res) => {
  const query = `
  SELECT items.id, items.title, items.author, items.cover, items.media_type, items.comments, "user".email_address
    FROM items
    JOIN "user" ON items.user_id = "user".id
    ORDER BY items.inserted_at DESC
    LIMIT 10;
  `;
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