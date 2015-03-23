module.exports.parse = function(data, callback) {

	var userEmail = data.userData.email;

    if(userEmail.indexOf("gmail") === -1){
    	return callback(new Error('email-not-allowed'));
    }
    callback(null, data);
};