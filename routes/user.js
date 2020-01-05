const accountUserRepo = require('../models/accountUserRepo');
const bcrypt = require('bcrypt-nodejs');
module.exports = function(router, passport){
  /* GET home page. */

  router.get('/', function(req, res, next) {
    res.render('user/trang_chu', { user:req.user });
  });

  router.get('/profile', function(req, res, next) {
    res.render('user/profile', { user:req.user });
  });

  router.get('/gioi_thieu', function(req, res, next) {
    res.render('user/gioi_thieu', { user:req.user });
  });

  router.get('/tim_kiem', function(req, res, next) {
    res.render('user/tim_kiem', { user:req.user });
  });

  router.get('/blog', function(req, res, next) {
    res.render('user/blog', { user:req.user }, { user:req.user });
  });

  router.get('/lien_he', function(req, res, next) {
    res.render('user/lien_he', { user:req.user });
  });

  router.get('/trang_chu', function(req, res, next) {
    res.render('user/trang_chu', { user:req.user });
  });

  router.get('/index', function(req, res, next) {
    res.render('user/trang_chu', { user:req.user });
  });

  router.get('/bat_dong_san', function(req, res, next) {
    res.render('user/bat_dong_san', { user:req.user });
  });

  router.get('/chi_tiet', function(req, res, next) {
    res.render('user/chi_tiet', { user:req.user });
  });

  router.get('/dang_nhap', function(req, res, next) {
    res.render('user/dang_nhap', { message:req.flash('loginMessage'), messageSignUp: req.flash('signupMessage') });
  });

  router.get('/chinh_sua', function(req, res, next) {
    res.render('user/chinh_sua', { user:req.user });
  });

  router.get('/gio_hang', function(req, res, next) {
    res.render('user/gio_hang', { user:req.user });
  });
  router.get('/ket_qua', function(req, res, next) {
    res.render('user/ket_qua_tim_kiem', { user:req.user });
  });

  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  router.post('/dang_nhap', passport.authenticate('local-login', 
    {
      successRedirect: '/index',
      failureRedirect: '/dang_nhap',
      failureFlash: true
    }), function(req, res) 
    {
      if(req.body.remember){
        req.session.cookie.maxAge = 1000 * 60 * 3;
      }else{
        req.session.cookie.expires = false;
      }
      res.redirect('/login');
    });

  router.post('/dang_ki/', passport.authenticate('local-signup', {
    successRedirect: '/index',
    failureRedirect: '/dang_nhap',
    failureFlash: true
  }));


}