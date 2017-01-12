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
}