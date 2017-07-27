$(document).ready(function(){

	console.log("initialisiation")


	$( window ).resize(function() {
  		resizeListener()
	});

});

var resizeListener = function(){
	var canvas = document.getElementById("defaultCanvas0");
  	canvas.style.width = '100%';
    canvas.style.height = '100%';  
}