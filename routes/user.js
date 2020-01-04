var express = require('express');

var router = express.Router();


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('user/trang_chu', { layout: 'layout_user'});
});

router.get('/profile', function(req, res, next) {
  res.render('user/profile');
});

router.get('/gioi_thieu', function(req, res, next) {
  res.render('user/gioi_thieu');
});

router.get('/tim_kiem', function(req, res, next) {
  res.render('user/tim_kiem');
});

router.get('/blog', function(req, res, next) {
  res.render('user/blog');
});

router.get('/lien_he', function(req, res, next) {
  res.render('user/lien_he');
});

router.get('/trang_chu', function(req, res, next) {
  res.render('user/trang_chu');
});

router.get('/bat_dong_san', function(req, res, next) {
  res.render('user/bat_dong_san');
});

router.get('/chi_tiet', function(req, res, next) {
  res.render('user/chi_tiet');
});

router.get('/dang_nhap', function(req, res, next) {
  res.render('user/dang_nhap');
});

router.get('/chinh_sua', function(req, res, next) {
  res.render('user/chinh_sua');
});

router.get('/gio_hang', function(req, res, next) {
  res.render('user/gio_hang');
});
router.get('/ket_qua', function(req, res, next) {
  res.render('user/ket_qua_tim_kiem');
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