var score = new Score();

// p5 setup funktion
function setup () {
	Renderer.setup();
	score.setup(wirgarten);
    aM.setup()

    noLoop()
}
// p5 draw function
function draw(){
	aM.draw()

	if (!Renderer.initDrawDone) {
		Renderer.firstDraw(0);
        score.update()
        Renderer.initDrawDone = true
	}

	score.update(frameCount);
	Renderer.draw()

}