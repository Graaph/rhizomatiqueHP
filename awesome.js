var logoHeight;
var logoWidth;
var dx;
var dy;
var xshift;
var margin;
var Nx;
var Ny;
var orientations;

var initTime;
var frameCounter = 0;

function setup() {

	var initWindowWidth = 1920; // windowWidth;
	var initWindowHeight = 1080; // windowHeight;
	setFrameRateByBPM(60.0)
	createCanvas(initWindowWidth, initWindowHeight);

	logo0 = loadImage("img/logo0.png");
	logo1 = loadImage("img/logo1.png");
	logo2 = loadImage("img/logo2.png");
	logo3 = loadImage("img/logo3.png");
	logo4 = loadImage("img/logo4.png");
	logo5 = loadImage("img/logo5.png");
	imgArray = [logo0, logo1, logo2, logo3, logo4, logo5];
	
	margin = 4;
	logoHeight = 65;
	logoWidth = 81;
	dx = logoWidth + 49 + 2*margin/cos(PI/12);
	dy = logoHeight/2 + margin;
	xshift = dx/2;

	Nx = parseInt(initWindowWidth/logoWidth + 2);
	Ny = parseInt(initWindowHeight/(logoHeight/2) + 2);
	
	orientations = new Array(Nx).fill(new Array(Ny).fill(0));
	for (var i=0; i < Ny; i++) {
		for (var j=0; j < Nx; j++) {
			orientations[j][i] = parseInt(6*random());
		}
	} 

	// resize for the first time
	resizeListener()
	initTime = performance.now()
}

function draw() {
	var t0 = performance.now();

	

	background("#07051b");

	for (var i=0; i < Ny; i++) {
		for (var j=0; j < Nx; j++) {

			is_odd = i % 2;
			image(imgArray[orientations[j][i]], -100 + j*dx + is_odd*xshift, -100 + i*dy);
		}
	}	



	frameCounter += 1;


	var t1 = performance.now();
	//console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
	console.log("frameRate : " +   frameCounter*1000 / (t1 - initTime)   )
	//console.log("run for : " +    (t1 - initTime)   )
	//console.log("Frames : " +   frameCounter  )

}
