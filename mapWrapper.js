// Constructor
var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype = {

  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    this.markers.push(marker);
    return marker;
  },

  addClickMap: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      //console.log(event);
      //console.log(event.latLng.lat());
      var position = {lat: event.latLng.lat(), lng: event.latLng.lng()}  
      this.addMarker(position);
    }.bind(this));
  },

  addClickMarker: function(marker, markerContent){
    google.maps.event.addListener(marker, 'click', function(event){
      var infoWindow = new google.maps.InfoWindow({
        maxWidth: 250,
        content: markerContent
      });
      infoWindow.open(this.googleMap, marker);
    });
  },

  bounceMarkers: function(){
    this.markers.forEach(function(marker){
      marker.setAnimation(google.maps.Animation.BOUNCE);
    });
  },

  dropMarkers: function(){
    this.markers.forEach(function(marker){
      marker.setAnimation(google.maps.Animation.DROP);
    });
  },

  gotoPlace: function(){
    var coords = {lat: 43.7799368, lng: 11.1709282};
    this.googleMap.setCenter(coords);
    this.addMarker(coords);
  },

  whereAmI: function(){
    navigator.geolocation.getCurrentPosition(function(position) {
      var whereIam = {lat: position.coords.latitude, lng: position.coords.longitude};
      this.googleMap.setCenter(whereIam);
      this.addMarker(whereIam);
    }.bind(this));
  }
}




