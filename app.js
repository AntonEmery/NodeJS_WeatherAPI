var https = require('https');
var data = "";


function getWeather() {
	var weather = https.get(
		'https://api.forecast.io/forecast/5a6971beaded415ef73e686e73f6be02/45.525121, -122.689441', 
		function(response) {
			//as data comes in chunks, adds it to the data var
			response.on('data', function(chunk){  
			data+=chunk;
			})

			//on end, parse data and print it to the console
			response.on('end', function(){
				//parse data, assign to body var
				var body = JSON.parse(data);
				//print out the weather summary
				console.log(body.currently.summary);
			})

			//logs result or error
			console.log('Result ' + response.statusCode);
			response.on('error', function(error) {
				console.log('Got error ' + error.message);
			})
		})

};

getWeather();