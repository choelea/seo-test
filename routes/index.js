var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/(:page).html', function (req, res, next) {
  res.render('seo/'+req.params.page);
});

module.exports = router;
