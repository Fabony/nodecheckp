var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});

/* Function to generate combination of password */


console.log(generatePass());


// 'uEyMTw32v9'
console.log(password);