/**
 * Created by Михаил on 02.02.2016.
 */
google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
	var mapOptions = {
		center: new google.maps.LatLng(51.490190806450855, -0.11925000131986963),
		zoom: 15,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
		},
		disableDoubleClickZoom: true,
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
		},
		scaleControl: true,
		scrollwheel: false,
		panControl: false,
		streetViewControl: true,
		draggable: true,
		overviewMapControl: true,
		overviewMapControlOptions: {
			opened: false,
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [{
			"featureType": "all",
			"elementType": "labels",
			"stylers": [{"hue": "#ff002d"}, {"gamma": "1.20"}, {"saturation": "23"}]
		}, {
			"featureType": "landscape.natural",
			"elementType": "geometry.fill",
			"stylers": [{"visibility": "on"}, {"hue": "#fff500"}, {"lightness": "-9"}, {"gamma": "2.54"}, {"saturation": "-1"}]
		}, {
			"featureType": "poi",
			"elementType": "geometry.fill",
			"stylers": [{"visibility": "on"}, {"hue": "#ffe300"}, {"weight": "1.10"}, {"gamma": "1.00"}, {"lightness": "16"}]
		}, {
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [{"lightness": "65"}, {"visibility": "simplified"}, {"weight": "0.71"}, {"gamma": "1.88"}]
		}, {
			"featureType": "road",
			"elementType": "labels",
			"stylers": [{"visibility": "off"}]
		}, {
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [{"visibility": "on"}, {"lightness": "30"}]
		}, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#c0e5df"}]}],
	}
	var mapElement = document.getElementById('google-map');
	var map = new google.maps.Map(mapElement, mapOptions);
	var locations = [
		['Lightbulb Design Agency', 'undefined', '+285 800 292 1468', 'support@lightbulbdesign.net', 'lightbulbdesign.net', 51.490190806450855, -0.11925000131986963, 'app/img/map-marker.png']
	];
	for (i = 0; i < locations.length; i++) {
		if (locations[i][1] == 'undefined') {
			description = '';
		} else {
			description = locations[i][1];
		}
		if (locations[i][2] == 'undefined') {
			telephone = '';
		} else {
			telephone = locations[i][2];
		}
		if (locations[i][3] == 'undefined') {
			email = '';
		} else {
			email = locations[i][3];
		}
		if (locations[i][4] == 'undefined') {
			web = '';
		} else {
			web = locations[i][4];
		}
		if (locations[i][7] == 'undefined') {
			markericon = '';
		} else {
			markericon = locations[i][7];
		}
		marker = new google.maps.Marker({
			icon: markericon,
			position: new google.maps.LatLng(locations[i][5], locations[i][6]),
			map: map,
			title: locations[i][0],
			desc: description,
			tel: telephone,
			email: email,
			web: web
		});
		link = '';
	}

}

