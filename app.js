var https = require('https');
var http = require('http');
var data = "";
var zipData = "";



function getWeather() {
	var weather = https.get(
		'https://api.forecast.io/forecast/5a6971beaded415ef73e686e73f6be02/39.9129412, -104.7956055', 
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

function getZip() {
	var ziplatlong = http.get('http://maps.googleapis.com/maps/api/geocode/json?address=' + process.argv[2], function(response){
				
				//assign chunks of zipData as they come in
				response.on('data', function(chunk){
				zipData+=chunk;
				})

				//parse result after it is done
				response.on('end', function(){
				//dont forget to parse JSON!	
				zipResult = JSON.parse(zipData);
				//logging lat and lng
				console.log(zipResult.results[0].geometry.location.lat);
				console.log(zipResult.results[0].geometry.location.lng);
				//need to get these variables into the getWeather function
				var zipLat = zipResult.results[0].geometry.location.lat;
				var zipLng = zipResult.results[0].geometry.location.lng;
				})
				console.log('Result ' + response.statusCode);
			})
		getWeather();
	}


getZip();	

//getWeather();