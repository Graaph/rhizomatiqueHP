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
}