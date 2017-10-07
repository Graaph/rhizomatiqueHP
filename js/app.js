$(document).ready(function(){

	console.log("initialisiation")

    // Enable WebMidi.js
WebMidi.enable(function (err) {

  if (err) {
    console.log("WebMidi could not be enabled.", err);
  }

  // Viewing available inputs and outputs
  console.log(WebMidi.inputs);
  console.log(WebMidi.outputs);

  // Display the current time
  console.log(WebMidi.time);

  // Retrieve an input by name, id or index
  var input = WebMidi.getInputByName("APC Key 25");

  console.log(input);

  // Listen for a 'note on' message on all channels
  input.addListener('noteon', "all",
    function (e) {
      console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ").");
    }
  );

  // Listen to pitch bend message on channel 3
  input.addListener('pitchbend', 3,
    function (e) {
      console.log("Received 'pitchbend' message.", e);
    }
  );

  // Listen to control change message on all channels
  input.addListener('controlchange', "all",
    function (e) {
      console.log(e.data)

      for (i in song01[0].animations){
        if (e.data[1] === 48){song01[0].animations[i].setColorR(e.value*2)}
        if (e.data[1] === 49){song01[0].animations[i].setColorG(e.value*2)}
        if (e.data[1] === 50){song01[0].animations[i].setColorB(e.value*2)}
        if (e.data[1] === 51){song01[0].animations[i].setLength(e.value)}

      }


    }
  );

});

	$( window ).resize(function() {
  		resizeListener()
	});

	 $(".playing-image").click(function(ev){


            if ($(this).hasClass("play-symbol")){
                loop();
                //document.getElementById('html-audio-playa').play();

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


