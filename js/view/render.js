var Renderer = {

    setup : function(){
    	setFrameRateByBPM(120.0 * 4);
    	console.log("setup shit");

		createCanvas(mC.getCanvasWidth(), mC.getCanvasHeight() );

		this.imgArray = [
			loadImage("img/logo0.png"), 
			loadImage("img/logo1.png"), 
			loadImage("img/logo2.png"),
			loadImage("img/logo3.png"),
			loadImage("img/logo4.png"),
			loadImage("img/logo5.png"),
		];

    	//background("#07051b");
    	this.initDrawDone = false;
	},

	draw : function(){

    	//background("#07051b");

		//background("#ffffff");

		// background('rgba(255,255,255, 1.0)');

		 background('rgba(7, 5, 27, 0.1)');

		for (pix in rS.changedPixels){
			this.drawRhizom(rS.changedPixels[pix].x,rS.changedPixels[pix].y)
		}


		rS.update();

		if (cfg.showFrameRate){
    		console.log("Frames : " +   frameRate()  )
        }

        fill(255, 255, 255);
		text(str(frameCount),10,10)
	},

	firstDraw : function(){
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
		var c = rS.colors[x][y];
		tint(c[0],c[1],c[1],255)
	},

	getImg : function(imgNr){
		return this.imgArray[imgNr]
	}
}