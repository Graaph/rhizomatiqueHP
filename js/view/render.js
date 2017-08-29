var Renderer = {

    setup : function(){
    	setFrameRateByBPM(60.0)
    	console.log("setup shit")

		createCanvas(mC.getCanvasWidth(), mC.getCanvasHeight() );

		this.imgArray = [
			loadImage("img/logo0.png"), 
			loadImage("img/logo1.png"), 
			loadImage("img/logo2.png"),
			loadImage("img/logo3.png"),
			loadImage("img/logo4.png"),
			loadImage("img/logo5.png"),
		];

    	background("#07051b");
    	this.initDraw = true;
	},

	draw : function(){
		if (this.initDraw) {
			this.firstDraw();
		}

		background("#07051b");

		for (pix in rS.changedPixels){

			this.drawRhizom(rS.changedPixels[pix].x,rS.changedPixels[pix].y)
		}

		rS.update()

	},

	firstDraw : function(){
		for (var i=0; i < mC.Ny; i++) {
			for (var j=0; j < mC.Nx; j++) {
				this.drawRhizom(i,j);
			}
		}
		initDraw = false;

		resizeListener()
	},

	drawRhizom:  function(x,y){
		this.changeColor(y,x)

		is_odd = x % 2;
		image(this.getImg( rS.orientation(y,x) ), 
				-100 + y*mC.dx + is_odd*mC.xshift, 
				-100 + x*mC.dy);
	},

	changeColor : function(x,y){
		tint(rS.colors[x][y])
	},

	getImg : function(imgNr){
		return this.imgArray[imgNr]
	}
}
 


// p5 setup funktion
function setup () {
	Renderer.setup()

	console.log(aM)
	aM.setup()

}
// p5 draw function
function draw(){
	aM.draw()
	Renderer.draw()
}
