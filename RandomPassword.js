// Agus Kurniawan - agusk2007@gmail.com
//
// this is a code modification from
// http://jaspreetchahal.org/php-random-password-generator-function/

var randomPass = function(length) {
    var lowerCase = 'qwertyuiopasdfghjklzxcvbnm';
    var upperCase = 'ASDFGHJKLZXCVBNMQWERTYUIOP';
    var numbers = '1234567890';
    var specialCharacters = '{}[];:,./<>?_+~!@#';
    var randomCode = '';

    var index = 0;
    var min = 0;
    var max = lowerCase.length - 1;
    for (var i = 0; i < Math.abs(length/3); i++) {
        index = Math.floor(Math.random() * (max - min + 1)) + min;
        randomCode = randomCode + lowerCase[index];
    }
    max = upperCase.length - 1;
    for (i = 0; i < Math.abs(length/3); i++) {
        index = Math.floor(Math.random() * (max - min + 1)) + min;
        randomCode = randomCode + upperCase[index];
    }
    max = numbers.length - 1;
    for (i = 0; i < Math.abs(length/3); i++) {
        index = Math.floor(Math.random() * (max - min + 1)) + min;
        randomCode = randomCode + numbers[index];
    }
    max = specialCharacters.length - 1;
    for (i = 0; i < Math.abs(length/3); i++) {
        index = Math.floor(Math.random() * (max - min + 1)) + min;
        randomCode = randomCode + specialCharacters[index];
    }

    var str = randomCode;
    var newStr = '';
    var n = randomCode.length;

    while (n) {
        index = Math.floor(Math.random() * n);
        newStr += str.charAt(index);
        str = str.substring(0, index) + str.substr(index + 1);
        n--;
    }


    return newStr;
};


exports.generatePassword = randomPass;
