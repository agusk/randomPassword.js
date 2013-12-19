## randomPassword.js
Generating random password using node.js

## Usage

You can include RandomPassword.js into your application.

    var random = require('./RandomPassword.js');
    for(var i=0;i<10;i++) {
        console.log(random.generatePassword(10))
    }

Then you can run your app

    node test.js

