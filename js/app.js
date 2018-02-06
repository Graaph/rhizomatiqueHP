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

            const APCKEY_81 = 'D#1';
            const APCKEY_82 = 'G0';
            const APCKEY_83 = 'B-1';


            // e.data[1] % 8 != 7
            if( e.data[1] % 8 ===7){
                const data = (e.data[1] - 7) / 8;

                const len = 64;
                walker = rndWalker(64,data);

                aM.flushAnimations();
                score.setup([walker]);
            }

        }
    );

    // Listen to pitch bend message on channel 3
    input.addListener('pitchbend', 3,
        function (e) {
            console.log("Received 'pitchbend' message.", e);
        }
    );

    // Listen to control change message on all channels
    var lastRGBA;

    input.addListener('controlchange', "all",
        function (e) {

	        //TODO: log level 2
            console.log(e.data);

            const APCKEY_NOB1 = 48;
            const APCKEY_NOB2 = 49;
            const APCKEY_NOB3 = 50;
            const APCKEY_NOB4 = 51;
            const APCKEY_NOB5 = 52;
            const APCKEY_NOB6 = 53;
            const APCKEY_NOB7 = 54;
            const APCKEY_NOB8 = 55;

            const APCKEY_SUSTAIN = 64;

            //const APCKEY_NOBS = []
            const DATA = e.data;


            // ------------ NOBS --------------------------
            if (DATA[1] === APCKEY_NOB1){
                console.log(DATA[2])
                setFrameRateByBPM(DATA[2] * 4 );
            }

            if(DATA[1] === APCKEY_NOB5){
                backgroundAlpha = DATA[2] / 127.0;
            }

            if(DATA[1] === APCKEY_NOB6){
                backgroundColor[0] = DATA[2] * 2;
            }

            if(DATA[1] === APCKEY_NOB7){
                backgroundColor[1] = DATA[2] * 2;
            }

            if(DATA[1] === APCKEY_NOB8){
                backgroundColor[2] = DATA[2] * 2;
            }



            // ------------ BUTTONS --------------------------

            if(DATA[1] === APCKEY_SUSTAIN){


                if (DATA[2] === 127){
                    lastRGBA = backgroundColor.concat([backgroundAlpha]);
                    console.log(lastRGBA);
                    console.log(lastRGBA);
                    console.log(lastRGBA);
                    console.log(lastRGBA);
                    console.log(lastRGBA);
                    setBackgroundRGBA(255,255,255,1.0);
                } else {
                    console.log(lastRGBA);

                    setBackgroundRGBA_Array(lastRGBA);
                }
            }


        }
    );

});

$(document).ready(function(){

    console.log("initialisiation");



    $( window ).resize(function() {
        resizeListener()
    });


});

var resizeListener = function(){
    var canvas = document.getElementById("defaultCanvas0");
    canvas.style.width = '100%';
    canvas.style.height = '100%';
};


//TODO : Background Color Manager
// *************************************
var backgroundColor = [25,25,25];
var backgroundAlpha = 0.1;

function setBackgroundColor(r,g,b){
    backgroundColor[0] = r;
    backgroundColor[1] = g;
    backgroundColor[2] = b;
}

function setAlpha(a) {
    backgroundAlpha = a;
}

function setBackgroundRGBA(r,g,b,a) {
    backgroundColor[0] = r;
    backgroundColor[1] = g;
    backgroundColor[2] = b;
    backgroundAlpha = a;
}

function setBackgroundRGBA_Array(array){
    return setBackgroundRGBA(array[0],array[1],array[2],array[3])
}

function getBackGroundRGBA() {
    return backgroundColor.concat(backgroundAlpha)
}
// *************************************
