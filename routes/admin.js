var express = require('express');

var router = express.Router();


/* GET users listing. */

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res, next) {
  res.render('admin/admin_login', { layout: false });
});

router.get('/index', function(req, res, next) {
  res.render('admin/index', { layout: 'layout_admin', action: "Điều khiển", kind_1: 1 });
});

router.get('/quan_ly_gian_hang', function(req, res, next) {
  res.render('admin/quan_ly_gian_hang', { layout: 'layout_admin', action: "Quản lý gian hàng", kind_3: 1 });
});

router.get('/profile', function(req, res, next) {
  res.render('admin/profile', { layout: 'layout_admin', action: "Profile" });
});

router.get('/quan_ly_account', function(req, res, next) {
  res.render('admin/quan_ly_account', { layout: 'layout_admin', action: "Quản lý accounts", kind_4: 1 });
});

router.get('/quan_ly_don_hang', function(req, res, next) {
  res.render('admin/quan_ly_don_hang', { layout: 'layout_admin', action: "Quản lý đơn hàng", kind_5: 1 });
});

router.get('/thong_ke', function(req, res, next) {
  res.render('admin/thong_ke', { layout: 'layout_admin', action: "Thống kê", kind_2: 1 });
});

router.get('/chinh_sua_profile', function(req, res, next) {
  res.render('admin/chinh_sua_profile', { layout: 'layout_admin', action: "Chỉnh sửa profile" });
});

module.exports = router;
