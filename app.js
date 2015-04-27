var https = require('https');


function getWeather() {
	var weather = https.get(
		'https://api.forecast.io/forecast/5a6971beaded415ef73e686e73f6be02/45.525121, -122.689441', 
		function(response) {
			response.on('data', function(chunk){
			console.log(chunk);
			})
			console.log('Result ' + response.statusCode);
		}).on('error', function(error) {
			console.log('Got error ' + error.message);
			})

};

getWeather();