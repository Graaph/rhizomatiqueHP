var Renderer = {

    setup : function(){
    	setFrameRateByBPM(121.0)
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
    	this.initDrawDone = false;
	},

	draw : function(){

		for (pix in rS.changedPixels){
			this.drawRhizom(rS.changedPixels[pix].x,rS.changedPixels[pix].y)
		}

		rS.update();

		if (cfg.showFrameRate){
    		console.log("Frames : " +   frameRate()  )
        }
	},

	firstDraw : function(){
		console.log(rS.colors)
		for (var i=0; i < mC.Ny; i++) {
			for (var j=0; j < mC.Nx; j++) {
				this.drawRhizom(j,i);
			}
		}

		resizeListener()
	},

	drawRhizom:  function(x,y){
		this.changeColor(x,y)

		is_odd = y % 2;
		image(this.getImg( rS.orientation(x,y) ), 
				-100 + x*mC.dx + is_odd*mC.xshift, 
				-100 + y*mC.dy);

		if (cfg.showXYNames){
		    fill(255, 255, 255);
            text(str(x) + " | " + str(y),
                -100 + x*mC.dx + is_odd*mC.xshift,
				-100 + y*mC.dy)
        }
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
	if (!Renderer.initDrawDone) {
		Renderer.firstDraw()
		Renderer.initDrawDone = true
	} else {
		Renderer.draw()
	}
}
