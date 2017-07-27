var logoHeight;
var logoWidth;
var dx;
var dy;
var xshift;
var margin;
var Nx;
var Ny;
var orientations;

function setup() {

	var initWindowWidth = 1920; // windowWidth;
	var initWindowHeight = 1080; // windowHeight;
	setFrameRateByBPM(111.0)
	createCanvas(initWindowWidth, initWindowHeight);
	frameRate(24);

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

	// TODO: better resize handling
	// resize for the first time
	resizeListener()

}

function draw() {
	background("#07051b");

	for (var i=0; i < Ny; i++) {
		for (var j=0; j < Nx; j++) {

			is_odd = i % 2;
			image(imgArray[orientations[j][i]], -100 + j*dx + is_odd*xshift, -100 + i*dy);
		}
	}	
}
