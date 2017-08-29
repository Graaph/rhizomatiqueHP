var rndWalk = animation;

rndWalk.prototype.setup = function(initPos,initColor) {
	console.log("rndWalk setup")
	console.log(this.addPoint() )
	this.Points = [this.addPoint()];
	console.log(this.Points )

	/*if (typeof initPos != 'undefined'){
		this.Points = [this.addPoint()];
	} else {
		this.Points = {	x : initPos.x ,y : initPos.y, 
				opt: {
					color : [	initColor[0],
								initColor[1],
								initColor[2]],
					orientation : 0,
				},
			}
	}*/	
	
};

rndWalk.prototype.draw = function() {
	
	console.log(this.Points.length)
	var lastObj = this.Points[this.Points.length -1];
	console.log(lastObj)
	console.log(lastObj.color)


	/*var retObj =  {	x : lastObj.x +1 ,y : lastObj.y +1, 
				opt: {
					color : lastObj.opt.color,
					orientation : 0,
				},
			}*/

	retObj = this.addPoint();

	this.Points.push(retObj)

	return this.Points;
};

rndWalk.prototype.addPoint = function(){
	return {	x : getRandomInt(0,19),y : getRandomInt(0,19), 
				opt: {
					color : [getRandomInt(120,250),
							10,
							getRandomInt(0,250)],
					orientation : 0,
				},
			};
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
