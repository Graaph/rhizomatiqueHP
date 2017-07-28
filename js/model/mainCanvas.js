// needs a better Name
function MainCanvas(cfg = {}) {

	for (cfgValue in cfg){
		this[cfgValue] = cfg[cfgValue]
	}

	var defaultCfg = {
		"margin"			: 4,
		"logoHeight"		: 65, 
		"logoWidth"			: 81,	
		"initCanvasWidth"	: 1920,
		"initCanvasHeight"	: 1080,
	}

	for (cfgValue in defaultCfg){
		if (!(cfgValue in this)){
			this[cfgValue] = defaultCfg[cfgValue];
		}
	}

	this.dx = this.logoWidth + 49 + 2*this.margin/Math.cos(Math.PI/12);
	this.dy = this.logoHeight/2 + this.margin;
	this.xshift = this.dx/2;

	this.Nx = parseInt(this.initCanvasWidth/this.logoWidth + 2);
	this.Ny = parseInt(this.initCanvasHeight/(this.logoHeight/2) + 2);
}

MainCanvas.prototype.getCanvasHeight = function() {
	return this.initCanvasHeight
};

MainCanvas.prototype.getCanvasWidth = function() {
	return this.initCanvasWidth
};
var mC = new MainCanvas({});