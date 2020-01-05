const accountRepo = require('../models/accountRepo');
const bcrypt = require('bcrypt-nodejs');
module.exports = function(router, passport){
	router.get('/admin/', function(req, res, next) {
	  res.render('admin/admin_login', { message:req.flash('loginMessage')});
	});

	router.get('/admin/signup', isSuperAdmin, function(req, res){
		res.render('admin/signup', {message: req.flash('signupMessage')});
	});

	router.get('/admin/index', isLoggedIn, function(req, res, next) {
	  res.render('admin/index', { action: "Điều khiển", user:req.user });
	});

	router.get('/admin/quan_ly_gian_hang', isLoggedIn, function(req, res, next) {
	  res.render('admin/quan_ly_gian_hang', { action: "Quản lý gian hàng", user:req.user });
	});

	router.get('/admin/profile', isLoggedIn, function(req, res, next) {
	  res.render('admin/profile', { action: "Profile", user:req.user });
	});

	router.get('/admin/quan_ly_account', isLoggedIn, function(req, res, next) {
		accountUsersRepo.loadAll().then(rows => {
			const page = parseInt(req.query.page) || 1;
			const perPage = 5;
			let start = (page - 1) * perPage;
			let end = page * perPage;
			res.render('admin/quan_ly_account', { action: "Quản lý người dùng", user:req.session.user, users: rows.slice(start, end), curPage: page });	
		})
	});

	router.get('/admin/quan_ly_admin', isSuperAdmin, function(req, res, next) {
		accountRepo.loadAll().then(rows => {
			const page = parseInt(req.query.page) || 1;
			const perPage = 5;
			let start = (page - 1) * perPage;
			let end = page * perPage;
			res.render('admin/quan_ly_admin', { action: "Quản lý Admin", user:req.session.user, users: rows.slice(start, end), curPage: page });	
		})
	});

	router.get('/admin/quan_ly_don_hang', isLoggedIn, function(req, res, next) {
	  res.render('admin/quan_ly_don_hang', {  action: "Quản lý đơn hàng", user:req.user });
	});

	router.get('/admin/thong_ke', isLoggedIn, function(req, res, next) {
	  res.render('admin/thong_ke', { action: "Thống kê", user:req.user });
	});

	router.get('/admin/chinh_sua_profile', isLoggedIn, function(req, res, next) {
	  res.render('admin/chinh_sua_profile', { action: "Chỉnh sửa profile", user:req.user });
	});

	router.get('/admin/logout', function(req, res){
		req.logout();
		res.redirect('/admin/');
	});
	//Post

	router.post('/admin/', passport.authenticate('local-login', 
		{
			successRedirect: '/admin/index',
			failureRedirect: '/admin/',
			failureFlash: true
		}), 
		function(req, res) {
			if(req.body.remember){
				req.session.cookie.maxAge = 1000 * 60 * 3;
			}else{
				req.session.cookie.expires = false;
			}
			res.redirect('/admin/');
		}
	);

	router.post('/admin/signup', passport.authenticate('local-signup', {
		successRedirect: '/admin/index',
		failureRedirect: '/admin/signup',
		failureFlash: true
	}));
}
function isLoggedIn(req, res, next){
	if(req.isAuthenticated())
		return next();
	res.redirect('/admin/');
}

function isSuperAdmin(req, res, next){
	if(req.session.isSuperAdmin == true)
	{
		return next();
	}
	res.redirect('/admin/');
}