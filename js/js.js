$(document).ready(function(){


	$.get("https://ipinfo.io", function(response) {
	    if(response.country != "ES")
	    {
	    	changeLangEN();
	    }
	}, "jsonp");

});

function changeLangEN()
{
	document.getElementById("nav-home").innerHTML = 'home';
	document.getElementById("nav-services").innerHTML = 'services';
	document.getElementById("nav-products").innerHTML = 'products';
	document.getElementById("nav-shops").innerHTML = 'shops';
	document.getElementById("title-pre").innerHTML = 'Introduction';
	document.getElementById("delivery").innerHTML = 'Delivery to Home';
	document.getElementById("cut").innerHTML = 'Traditional cut';
	document.getElementById("quality").innerHTML = 'Quality';
	document.getElementById("serv").innerHTML = 'Available 24 hours';
	document.getElementById("rest").innerHTML = 'Restaurants';
	document.getElementById("chart").innerHTML = 'Charcuterie';
	document.getElementById("send").innerHTML = 'Send';
	document.getElementById("our-shops").innerHTML = 'Our Shops';
}

function enviar() {
	var email = $('#email').val();
	var msg = $('#mensaje').val();
	campoVacio(email, "Email");	
	campoVacio(msg, "Mensaje");
}

function campoVacio(campoNom, text) {
	var confirmacio = false;
	if(campoNom != '') confirmacio = true;
	else alert("El campo " + text + " NO puede estar vacio!")
	return confirmacio;
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function hamburgerNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/***************** API Mapa *****************************/

      function initMap() {
      	var center = {lat: 41.3850639, lng: 2.1734034999999494}; //Barcelona
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: center
        });

        setMarkers(map);
      }
     

      function setMarkers(map) {
      	if(localStorage.getItem('denuncias')) var denuncias = JSON.parse(localStorage.getItem('denuncias'));

        var denunciasG = [];
        var latitud;
        var longitud;
        var id;
		//for (var i = denuncias.length - 1; i >= 0; i--) {
      		latitud  = parseFloat(41.435312);
      		longitud = parseFloat(2.1720758999999816);
      		id = 'shop 1';
      		if((latitud) && (longitud)) denunciasG.push([id, latitud, longitud]);
      		latitud  = parseFloat(41.3810829);
      		longitud = parseFloat(2.1548639000000094);
      		id = 'shop 2';
      		if((latitud) && (longitud)) denunciasG.push([id, latitud, longitud]);
      		latitud  = parseFloat(41.39869160000001);
      		longitud = parseFloat(2.173824100000047);
      		id = 'shop 3';
      		if((latitud) && (longitud)) denunciasG.push([id, latitud, longitud]);
      		latitud  = parseFloat(41.381445);
      		longitud = parseFloat(2.1730300000000398);
      		id = 'shop 4';
      		if((latitud) && (longitud)) denunciasG.push([id, latitud, longitud]);
      		latitud  = parseFloat(41.4300139);
      		longitud = parseFloat(2.142215999999962);
      		id = 'shop 5';
      		if((latitud) && (longitud)) denunciasG.push([id, latitud, longitud]);
      	//};
        
          var shape = {
            coords: [1, 1, 1, 20, 18, 20, 18, 1],
            type: 'poly'
          };
          for (var i = 0; i < denunciasG.length; i++) {
            var denuncia = denunciasG[i];
            var marker = new google.maps.Marker({
              position: {lat: denuncia[1], lng: denuncia[2]},
              map: map,
              //icon: image,
              shape: shape,
              title: denuncia[0],
              zIndex: denuncia[3]
            });
          }
      }
/************************************************************************/