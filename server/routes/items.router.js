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

  router.post('/', (req, res) => {
    const sqlText = `
      INSERT INTO items (title, author, cover, media_type, comments, user_id)
      VALUES ($1, $2, $3, $4, $5, $6);
    `;
    const sqlValues = [
      req.body.itemTitle,
      req.body.itemAuthor,
      req.body.itemCover,
      req.body.itemMediaType,
      req.body.itemComments,
      req.user.id
    ];
    pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.log('INSERT database error', dbErr);
      res.sendStatus(500);
    });
  })

  module.exports = router;