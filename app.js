var https = require('https');


function getWeather() {
	https.get(
		'https://api.forecast.io/forecast/5a6971beaded415ef73e686e73f6be02/45.525121, 122.689441', 
		function(response) {
			console.log('Result' + response.statusCode);
		})
};

getWeather();