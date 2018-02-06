var Renderer = {

    setup : function(){
    	setFrameRateByBPM(110. *0.5 );
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

    	background("#07051b");
    	this.initDrawDone = false;
	},

	draw : function(){

    	//background("#07051b");

		//background("#ffffff");

		//background('rgba(20,20,20, 0.31)');
		// backgroundColor[0] += (frameCount % 4 === 0)? 1 :0;
		// if (backgroundColor[0] % 64 === 0){
		// 	backgroundColor[0] = 0;
		// }

		const backgroundColorAsString = 'rgba('+backgroundColor[0]+','+backgroundColor[1]+','+backgroundColor[2]+','+backgroundAlpha+')';


		//console.log(backgroundColorAsString)
		background(backgroundColorAsString);

		 //background('rgba(1, 1, 1, 0 	)');

		for (pix in rS.changedPixels){
			this.drawRhizom(rS.changedPixels[pix].x,rS.changedPixels[pix].y)
		}


		rS.update();

		if (cfg.showFrameRate){
			text(str(frameCount),10,10)
        }

        fill(255, 255, 255);
	},

	firstDraw : function(){
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
		tint(c[0],c[1],c[2],255)
	},

	getImg : function(imgNr){
		return this.imgArray[imgNr]
	}
}