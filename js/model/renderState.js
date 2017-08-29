function RenderState(){
	this.orientations = new Array(mC.Nx).fill(new Array(mC.Ny).fill(0));
	for (var i=0; i < mC.Ny; i++) {
		for (var j=0; j < mC.Nx; j++) {
			this.orientations[j][i] = parseInt(6*Math.random());
		}
	}

	this.colors = new Array(mC.Nx).fill(new Array(mC.Ny).fill(0));
	for (var i=0; i < mC.Ny; i++) {
		for (var j=0; j < mC.Nx; j++) {
			this.colors[j][i] = [0,0,0]
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