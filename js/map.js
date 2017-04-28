var map;
	function initMap(){
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 5,
     		center: new google.maps.LatLng(0.7893 ,113.9213 ),
      		mapTypeId: 'terrain',
      		
		});

		var script = document.createElement('script');
	    script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
	    document.getElementsByTagName('head')[0].appendChild(script);
	}

	window.eqfeed_callback = function(results){
		for (var i = 0; i < results.features.length; i++) {
			var coords = results.features[i].geometry.coordinates;
			var latLng = new google.maps.LatLng(coords[1],coords[0]);
			var marker = new google.maps.Marker({
				position: latLng,
				map: map
			});
		}
	}