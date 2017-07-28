var Renderer = {

    setup : function(){
    	setFrameRateByBPM(120.0)

		createCanvas(mC.getCanvasWidth(), mC.getCanvasHeight() );

		this.imgArray = [
			loadImage("img/logo0.png"), 
			loadImage("img/logo1.png"), 
			loadImage("img/logo2.png"),
			loadImage("img/logo3.png"),
			loadImage("img/logo4.png"),
			loadImage("img/logo5.png"),
		];
	
    	console.log("setup")

    	// setup the other shit

    	background("#07051b");
    	this.initDraw = true;
	},

	draw : function(){
		if (this.initDraw) {
			this.firstDraw();
		}

	},

	firstDraw : function(){
		for (var i=0; i < mC.Ny; i++) {
			for (var j=0; j < mC.Nx; j++) {

				is_odd = i % 2;
				image(
					this.getImg( rS.orientation(j,i) ), 
					-100 + j*mC.dx + is_odd*mC.xshift, 
					-100 + i*mC.dy);
			}
		}
		initDraw = false;

		resizeListener()
	},

	getImg : function(imgNr){
		return this.imgArray[imgNr]
	}
}
 


// p5 setup funktion
function setup () {
	Renderer.setup()

}
// p5 draw function
function draw(){
	Renderer.draw()
}
