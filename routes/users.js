var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userlist', function(req, res, next) {
  res.json({a: 'b'});
});

module.exports = router;
