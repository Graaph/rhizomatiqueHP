var score = new Score();

// p5 setup funktion
function setup () {
    aM.setup();
    score.setup(song02);
    Renderer.setup();

    noLoop()
}
// p5 draw function
function draw(){
	score.update(frameCount);

	aM.draw();
	Renderer.draw()
}