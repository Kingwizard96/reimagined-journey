var map;
var service;
var infowindow = new google.maps.InfoWindow();
console.log("hello")
var latNumber;
var longNumber;

function initMap() {
    console.log('hi')
}
var gettingCoords = document.getElementById('geocode-address');
var button = document.getElementById('btn')
button.addEventListener('click', function (e) {
    e.preventDefault();
    var address = document.getElementById('geocode-address').value;
    geocodeAddress(address);
});

console.log('hello2')

function geocodeAddress(address) {
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: address }, function (results, status) {
        if (status === 'OK' && results[0]) {
            var formattedAddress = results[0].formatted_address;
            var location = results[0].geometry.location;

            console.log('Formatted Address: ' + formattedAddress);
            console.log('Latitude: ' + location.lat());
            console.log('Longitude: ' + location.lng());
            initialize(location.lat(), location.lng());
        } else {
            console.log('Geocoding was not successful for the following reason: ' + status);
        }
    });
}
//initMap();
//geocodeAddress();

function initialize(Latitude, Longitude) {
    var pyrmont = new google.maps.LatLng(Latitude, Longitude);

    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
    });

    var request = {
        location: pyrmont,
        radius: '1000',
        type: ['restaurants']
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}
function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;

    const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
        title: place.name
    });

    google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(place.name || "");
        infowindow.open(map);
        console.log(this)
    });
}

//initialize()

