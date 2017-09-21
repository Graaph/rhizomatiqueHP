var score = new Score();

// p5 setup funktion
function setup () {
	Renderer.setup();
	score.setup(song01);
    aM.setup()

    noLoop()
}
// p5 draw function
function draw(){




	score.update(frameCount);

	aM.draw()

	if (!Renderer.initDrawDone) {
		Renderer.firstDraw(0);
        score.update()
        Renderer.initDrawDone = true
	}


	Renderer.draw()

}