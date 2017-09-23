function RenderState(){

	this.orientations = new Array(mC.Nx).fill(
	    new Array(mC.Ny).fill(0));

	for (var y=0; y < mC.Ny; y++) {
		for (var x=0; x < mC.Nx; x++) {
			this.orientations[x][y] = parseInt( getRandomInt(0,5) );
		}
	}

	this.colors = new Array(mC.Nx).fill(
	    new Array(mC.Ny).fill(0));

	for (var y=0; y < mC.Ny; y++) {
		for (var x=0; x < mC.Nx; x++) {
			this.colors[x][y] = [0,0,0]
		}
	}

	this.changedPixels = []
}

RenderState.prototype.update = function(){
	this.changedPixels = []
}

RenderState.prototype.addChangedPixel = function(newX,newY,opt){
	this.changedPixels.push({x: newX,y : newY})

	if ("orientation" in opt){
		this.orientations[newX][newY] = opt.orientation
	}

	if ("color" in opt){
		this.colors[newX][newY] = opt.color
	}
}

RenderState.prototype.orientation = function(x,y) {
	return this.orientations[x][y];
}

RenderState.prototype.color = function(x,y) {
	return this.colors[x][y];
}

var rS = new RenderState();