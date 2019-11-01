var express = require('express');

var router = express.Router();


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('user/trang_chu', { layout: 'layout_user', mail: 0});
});

router.get('/gioi_thieu', function(req, res, next) {
  res.render('user/gioi_thieu', { layout: 'layout_user'});
});

router.get('/blog', function(req, res, next) {
  res.render('user/blog', { layout: 'layout_user'});
});

router.get('/lien_he', function(req, res, next) {
  res.render('user/lien_he', { layout: 'layout_user'});
});

router.get('/trang_chu', function(req, res, next) {
  res.render('user/trang_chu', { layout: 'layout_user'});
});

router.get('/bat_dong_san', function(req, res, next) {
  res.render('user/bat_dong_san', { layout: 'layout_user'});
});

router.get('/chi_tiet', function(req, res, next) {
  res.render('user/chi_tiet', { layout: 'layout_user'});
});

router.get('/dang_nhap', function(req, res, next) {
  res.render('user/dang_nhap', { layout: false });
});

router.get('/gio_hang', function(req, res, next) {
  res.render('user/gio_hang', { layout: 'layout_user'});
});
// router.post('/dang_ki', (req, res) => {
//     layout_user = {
//         password: SHA256(req.body.password).toString(),
//         name: req.body.name,
//         tel: req.body.tel,
//         email: req.body.email,
//         dob: req.body.dob,
//         address:req.body.address,
//     }
// });

module.exports = router;