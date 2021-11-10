(function ($) {
    'use strict';  
	// Google map
	 function basicmap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(23.810332, 90.412518), // New York
             // How you would like to style the map. 
				// This is where you would paste any style found on Snazzy Maps.
				styles: [{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"on"}]}]
			};
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('contact-map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(23.810332, 90.412518),
            map: map,
            title: 'Cryptox'
        });
    }
    if ($('#contact-map').length != 0) {
        google.maps.event.addDomListener(window, 'load', basicmap);
    }
})(jQuery);

