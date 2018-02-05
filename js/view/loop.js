var score = new Score();

// p5 setup funktion
function setup () {
    aM.setup();
    score.setup(refSong);
    Renderer.setup();

    //noLoop()
    resizeListener();
}
// p5 draw function
function draw(){
	score.update(frameCount);

	aM.draw();
	Renderer.draw()
    if (cfg.save2disk) {
        CaptureScreen()
    }

}

var canvas = document.getElementById("defaultCanvas0");

function CaptureScreen() {
    console.log("Capture Sreen")
    frameCount++;


    // draw to canvas...
  /*  canvas.toBlob(function(blob) {
        saveAs(blob, frameCount+".png");
    });*/
}