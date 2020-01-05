var db = require('../data/db');

exports.loadAll = () => {
	var sql=`select UserName from useraccount`;
	return db.load(sql);
}

exports.add = user => {
    var sql = `insert into useraccount(UserName, PassWord, FullName, Sex, Address, Birthday, PhoneNumber, Email, Link_Avt) values('${user.UserName}', '${user.PassWord}', '${user.FullName}', '${user.Sex}', '${user.Address}', '${user.Birthday}', '${user.PhoneNumber}', '${user.Email}', '${user.Link_Avt}');`;
    return db.save(sql);
}

exports.update = user => {
	var sql=`update useraccount set FullName='${user.FullName}', Sex = '${user.Sex}', Address='${user.Address}', Birthday='${user.Birthday}', PhoneNumber = '${user.PhoneNumber}', Email='${user.Email}', Link_Avt='${user.Link_Avt}' where ID_User=${user.id};`;
	return db.save(sql);
}

exports.singleId = (id) => {
    var sql = `select * from useraccount where ID_User=${id};`;
    return db.load(sql);
}

exports.singleUserName = (UserName) => {
    var sql = `select * from useraccount where UserName='${UserName}';`;
    return db.load(sql);
}