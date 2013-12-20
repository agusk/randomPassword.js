
var random = require('./RandomPassword.js');

for(var i=0;i<5;i++) {
    console.log(random.generatePassword(10));
	console.log(random.generatePassword(15));
	console.log(random.generatePassword(20));
}

