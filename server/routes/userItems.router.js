const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.get('/userItems', (req, res) => {
  console.log('req.user:', req.user);
  if (req.isAuthenticated()) {
    const sqlValues = [req.user.clearance_level];
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
});

module.exports = router;