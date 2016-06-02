angular.module('RentApp')
 .controller('PhotosController',function ($scope) {
    console.log('rentHouse');
    
    
    
    
    
    
    
    
      
 var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 60000
};
function success(pos) {
  var crd = pos.coords;  
  $scope.lat = crd.latitude;
  $scope.long = crd.longitude;
  crd.accuracy ;  
  geocoder = new google.maps.Geocoder();
		var latlng = new google.maps.LatLng(crd.latitude,crd.longitude);    
    geocoder.geocode({'latLng': latlng}, function(results, status) {
	if (status == google.maps.GeocoderStatus.OK) {      
       $scope.formatedAddress = results[0].formatted_address;
	     } 
   });
};
function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};
navigator.geolocation.getCurrentPosition(success, error, options); 
 });
  
    
 
 
 