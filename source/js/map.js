function initMap() {
  var latLng = new google.maps.LatLng(34.868633, -111.761734);
  var mapMarker = {
    url: 'img/icon-map-marker.svg',
    size: new google.maps.Size(27, 27)
  };

  var mapOptions = {
    center: latLng,
    zoom: 7,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    },
    scrollwheel: false,
    disableDefaultUI: true
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var marker = new google.maps.Marker({
    map: map,
    position: latLng,
    icon: mapMarker
  });
}