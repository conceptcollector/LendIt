const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const query = `
  SELECT *
    FROM items
    ORDER BY inserted_at
    DESC
    LIMIT 4;`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all items', err);
      res.sendStatus(500)
    })
});

router.get('/:id', (req, res) => {
  const sqlText = `
    SELECT * FROM items
      WHERE id=$1;
  `;
  const sqlValues = [req.params.id];
  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      const theItem = dbRes.rows[0];
      res.send(theItem);
    })
    .catch((dbErr) => {
      console.log('error in GET /items/:id', dbErr);
      res.sendStatus(500);
    })
})

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

router.post('/:id', (req, res) => {
  const sqlText = `
    UPDATE items 
      SET 
        title = $1,
        author = $2,
        cover = $3,
        media_type = $4,
        comments = $5
      WHERE id = $6;
  `;
  const sqlValues = [
    req.body.title,
    req.body.author,
    req.body.cover,
    req.body.media_type,
    req.body.comments,
    req.params.id
  ];
  
  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((dbErr) => {
      console.log('UPDATE database error', dbErr);
      res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
  const sqlText = `
    DELETE FROM items
      WHERE id=$1;
    `;
  const sqlValues = [req.params.id];

  pool.query(sqlText, sqlValues)
  .then((dbRes) => {
    res.sendStatus(200);
  })
  .catch((dbErr) => {
    console.error('DELETE database error', dbErr)
    res.sendStatus(500);
  })
})

  module.exports = router;