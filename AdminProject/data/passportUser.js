
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require('bcrypt-nodejs');
const accountUserRepo = require('../models/accountUserRepo');
module.exports = function(passport) 
{
	passport.serializeUser(function(user, done){
		done(null, user.ID_User);
	});
	passport.deserializeUser(function(id, done) {
		accountUserRepo.singleId(id).then(rows => {
			done(null, rows[0]);
		})
		.catch(function(err){
		console.log(err);
		done(err);
		});
	});
	passport.use('local-signup', new LocalStrategy({
		usernameField : 'UserName', passwordField : 'PassWord', passReqToCallback : true}, 
		function(req, UserName, PassWord, done){
			accountUserRepo.singleUserName(UserName).then(rows => {
				if(PassWord.length < 6)
				{
					return done(null, false, req.flash('signupMessage', 'Mật khẩu phải chứa ít nhất 6 kí tự'));
				}
				if(rows.length)
				{
					return done(null, false, req.flash('signupMessage', 'Username đã tồn tại'));
				}
				else{
					const newUserMysql = {
						UserName: UserName,
						PassWord: bcrypt.hashSync(PassWord, null, null),
						FullName: req.param('FullName'),
						Sex: null,
						Address: null,
						PhoneNumber: req.param('PhoneNumber'),
						Birthday: null,
						Email: req.param('Email'),
						Link_Avt: null
					};
					accountUserRepo.add(newUserMysql).then(rows => {
						newUserMysql.ID_User = rows.insertId;
						return done(null, newUserMysql);
					});
				}
			})
			.catch(function(err){
			console.log(err);
			done(err);
			});
		})
	);



	passport.use('local-login', new LocalStrategy({
		usernameField : 'UserName', passwordField : 'PassWord', passReqToCallback : true}, 
		function(req, UserName, PassWord, done){
			accountUserRepo.singleUserName(UserName).then(rows =>{
				if(!rows.length)
				{
					console.log('Không tìm thấy UserName');
					return done(null, false, req.flash('loginMessage', 'Sai email hoặc mật khẩu'));
				}
				if(!bcrypt.compareSync(PassWord, rows[0].PassWord))
				{
					console.log('Sai mật khẩu');
					return done(null, false, req.flash('loginMessage', 'Sai email hoặc mật khẩu'));
				}
				req.session.user = rows[0];
				req.session.isLoggedIn = 1;
				return done(null, rows[0]);
			})
			.catch(function(err){
    		console.log(err);
			done(err);
			});
		})
	);
};
