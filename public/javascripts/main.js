// MapBox js and everything else goes here

var GeojsonFeature = $.getJSON("kenya_districts98.json", function(data) {
	return data;
});

// var GeoJsonLayer = L.geoJson().addTo(map);

var map = L.mapbox.map('map', 'examples.map-9ijuk24y')
    .setView([2.2, 38], 7)
		
L.geoJson(GeojsonFeature,  {
        style: style,
    }).addTo(map);


// Add colors
function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
