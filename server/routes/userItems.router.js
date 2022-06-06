const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.get('/', (req, res) => {
  console.log('req.user:', req.user);
  if (req.isAuthenticated()) {
    const sqlValues = [req.user.id];
    const sqlQuery = `SELECT * FROM items
    WHERE user_id = $1;`
  pool
    .query(sqlQuery, sqlValues)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error making SELECT for items:', error);
      res.sendStatus(500);
    });
} else {
  res.sendStatus(401);
  }
})

router.get('/:id', (req, res) => {
  if (req.isAuthenticated()) {
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
} else {
  res.sendStatus(401);
  }
})

router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
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
} else {
  res.sendStatus(401);
  }
})

router.post('/:id', (req, res) => {
  if (req.isAuthenticated()) {
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
} else {
  res.sendStatus(401);
  }
})

router.delete('/:id', (req, res) => {
  if (req.isAuthenticated()) {
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
} else {
  res.sendStatus(401);
  }
})

module.exports = router;