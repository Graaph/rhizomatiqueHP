$(document).ready(function(){

	console.log("initialisiation")

	$( window ).resize(function() {
  		resizeListener()
	});

	 $(".playing-image").click(function(ev){


            if ($(this).hasClass("play-symbol")){
                loop();
                document.getElementById('html-audio-playa').play();

                $(this).attr('src','img/pause.png')
                    .removeClass("play-symbol")
                    .addClass("pause-symbol");
            } else {
                noLoop()
                document.getElementById('html-audio-playa').pause();


                $(this).attr('src','img/play.png')
                    .removeClass("pause-symbol")
                    .addClass("play-symbol");
            }
        });

});

var resizeListener = function(){
	var canvas = document.getElementById("defaultCanvas0");
  	canvas.style.width = '100%';
    canvas.style.height = '100%';  
}


