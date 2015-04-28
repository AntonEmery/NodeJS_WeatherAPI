var https = require('https');
var http = require('http');
var data = "";
var zipData = "";


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
				console.log(process.argv);
			})

			//logs result or error
			console.log('Result ' + response.statusCode);
			response.on('error', function(error) {
				console.log('Got error ' + error.message);
			})
		})
};

function getZip() {
	var ziplatlong = http.get('http://maps.googleapis.com/maps/api/geocode/json?address=97203', function(response){
			response.on('data', function(chunk){
			zipData+=chunk;
			console.log(zipData);	
			})
			console.log('Result ' + response.statusCode);
	})
}

getZip();	

//getWeather();