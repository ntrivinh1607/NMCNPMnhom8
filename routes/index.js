var express = require('express');

var router = express.Router();


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('trang_chu', { trang_chu: "class=\"active\"" });
});
router.get('/gioi_thieu', function(req, res, next) {
  res.render('gioi_thieu', { gioi_thieu: "class=\"active\"" });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { blog: "class=\"active\"" });
});

router.get('/lien_he', function(req, res, next) {
  res.render('lien_he', { lien_he: "class=\"active\"" });
});

router.get('/trang_chu', function(req, res, next) {
  res.render('trang_chu', { trang_chu: "class=\"active\"" });
});

router.get('/bat_dong_san', function(req, res, next) {
  res.render('bat_dong_san', { bat_dong_san: "class=\"active\"" });
});

router.get('/chi_tiet', function(req, res, next) {
  res.render('chi_tiet', { });
});



module.exports = router;
