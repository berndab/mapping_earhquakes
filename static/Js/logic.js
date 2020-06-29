// Add console.log to check to see if our code is working.
console.log("working");


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: API_KEY
});

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

//Add San Francisco Airport GeoJSON data.
let airportData =
{
	"type":"FeatureCollection","features":[{
	"type":"Feature",
	"properties":{
		"id":"3469",
		"name":"San Francisco International Airport",
		"city":"San Francisco",
		"country":"United States",
		"faa":"SFO",
		"icao":"KSFO",
		"alt":"13",
		"tz-offset":"-8",
		"dst":"A",
		"tz":"America/Los_Angeles"},
		"geometry":{
			"type":"Point",
			"coordinates":[-122.375,37.61899948120117]}}
]};


// Adding GeoJSON data to the map using pointToLayer
// L.geoJSON(airportData, {
// 	// We turn each feature into a marker on the map.
// 	pointToLayer: function(feature, latlng) {
// 	console.log(feature);
// 	return L.marker(latlng)
// 	.bindPopup("<h2>" + feature.properties.city + "</h2>");
// 	}
// }).addTo(map);

// Adding GeoJSON data to the map using onEachFeature
L.geoJSON(airportData, {
    onEachFeature: function(frature, layer){
		console.log(layer);
		layer.bindPopup();
	}
}).addTo(map);


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);