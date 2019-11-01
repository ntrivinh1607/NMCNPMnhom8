var express = require('express');

var router = express.Router();


/* GET users listing. */

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res, next) {
  res.render('admin/index', { layout: 'layout_admin', action: "Điều khiển" });
});

router.get('/bieu_do', function(req, res, next) {
  res.render('admin/bieu_do', { layout: 'layout_admin', action: "Biểu đồ"  });
});

router.get('/profile', function(req, res, next) {
  res.render('admin/profile', { layout: 'layout_admin', action: "Profile"  });
});

router.get('/quan_ly_account', function(req, res, next) {
  res.render('admin/quan_ly_account', { layout: 'layout_admin', action: "Quản lý accounts"  });
});

router.get('/quan_ly_don_hang', function(req, res, next) {
  res.render('admin/quan_ly_don_hang', { layout: 'layout_admin', action: "Quản lý đơn hàng"  });
});

router.get('/thong_ke', function(req, res, next) {
  res.render('admin/thong_ke', { layout: 'layout_admin', action: "Thống kê"  });
});


module.exports = router;
