var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DEEPMIND' });
});

/* GET post page. */
router.get('/post', function (req, res, next) {
    res.render('post', { title: 'DEEPMIND' });
});

module.exports = router;
