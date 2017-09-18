var rndPoints = animation;

rndPoints.prototype.setup = function(initPos,initColor) {
};

rndPoints.prototype.draw = function() {
	return [this.addPoint()];
};

rndPoints.prototype.addPoint = function(){
	return {	x : getRandomInt(0,14),y : getRandomInt(0,31), 
				opt: {
					color : [
						255,
                        255,
                        getRandomInt(0,250)],
				},
			};
};