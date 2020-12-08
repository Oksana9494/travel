window.onload = getMyLocation;


function getMyLocation () { 
	if (navigator.geolocation) { 
		navigator.geolocation.getCurrentPosition(displayLocation); 
	}
	else {
		alert("Геолокация не поддерживается"); 
	}
}
 
function  displayLocation(position) { 
	var	latitude = position.coords.latitude; 
	var	longitude = position.coords.longitude; 
	var div = document.getElementById("location");
	div.innerHTML = latitude + ' ' + longitude; 
}