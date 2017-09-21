var rndPoints= function (opt) {}

rndPoints.prototype.setup = function(initPos,initColor) {
	this.Points = []
    this.length = 20
};

rndPoints.prototype.draw = function() {
	console.log(this.Points.length);

    if (this.Points.length > this.length - 1){
        this.Points.shift();
    }

	this.Points.push(this.addPoint())
	return  this.Points;
};

rndPoints.prototype.addPoint = function(){
	return {	x : getRandomInt(0,14),y : getRandomInt(0,31),
				opt: {
					color : [
						getRandomInt(100,150),
                        getRandomInt(100,150),
                        getRandomInt(100,150)],
				},
			};
};