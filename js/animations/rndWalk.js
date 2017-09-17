var rndWalk = animation;

rndWalk.prototype.setup = function(initPos,initColor) {
	console.log("rndWalk setup")

	this.length = 15
	this.Points = [this.addPoint()];

	
};

rndWalk.prototype.draw = function() {
	
	var lastObj = this.Points[this.Points.length -1];
	
	


	retObj = this.addPoint();

	this.Points.push(retObj)
	newPoints.push(retObj)

	return newPoints;
};

rndWalk.prototype.addPoint = function(){
	return {	x : getRandomInt(0,14),y : getRandomInt(0,31), 
				opt: {
					color : [getRandomInt(0,250),
							getRandomInt(0,250),
							getRandomInt(0,250)],
					orientation : 0,
				},
			};
};


rndWalk.prototype.findNextPoint = function(lastPoint){

}