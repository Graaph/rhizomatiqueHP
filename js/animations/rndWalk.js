var rndWalk = animation;

rndWalk.prototype.setup = function(initPos,initColor) {
	console.log("rndWalk setup");

	this.length = 15;
	this.Points = [this.addRandomPoint()];
};

rndWalk.prototype.draw = function() {
    var nextPoint = this.findNextPoint();
    this.Points.push(nextPoint);

    this.Points.splice(0,1);

    return this.Points
};

rndWalk.prototype.addRandomPoint = function(){
	return {	x : getRandomInt(0,14),y : getRandomInt(0,31), 
				opt: {
					color : [
						getRandomInt(0,250),
                        getRandomInt(0,250),
                        getRandomInt(0,250)],
				},
			};
};

rndWalk.prototype.findNextPoint = function(){
    var lastPoint = this.Points[this.Points.length -1];

    lastPoint.x += 1;
    lastPoint.x = lastPoint.x % 15;

    lastPoint.y += 1;
    lastPoint.y = lastPoint.y % 15;

    console.log(lastPoint.x,lastPoint.y);

    return lastPoint;
}