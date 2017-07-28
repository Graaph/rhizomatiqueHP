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
			this.colors[j][i] = {
				"r" : 0, "g" : 0, "b" : 0,
			}
		}
	}
}

RenderState.prototype.orientation = function(x,y) {
	return this.orientations[x][y];
}
RenderState.prototype.color = function(x,y) {
	return this.colors[x][y];
}
var rS = new RenderState();

