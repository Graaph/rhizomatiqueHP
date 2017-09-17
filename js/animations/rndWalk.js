var rndWalk = function (opt) {
   if (opt === undefined){
	    opt = {};
	    console.log("undefinded")
    }

	if ("length" in opt)
	    { this.length = opt.length; }
    else
        { this. length = 2; }

    if ("direction" in opt){
	    this.direction = opt.direction
    } else {
        this.direction = "random"
    }

    if ("orientation" in opt){
        this.orientation = opt.orientation;
    }
};

rndWalk.prototype.setup = function() {

	this.actColor = this.getRNDColor();
	this.Points = [this.addRandomPoint()];


};

rndWalk.prototype.draw = function() {
    var nextPoint = this.findNextPoint();

    if (this.Points.length > this.length){
        this.Points.shift();
    }

    if (frameCount%this.length == 0){
        var newColor = colorLib.rndColor(nextPoint.opt.color,2)
        nextPoint.opt.color = newColor
    }

    this.Points.push(nextPoint);

    return this.Points
};


rndWalk.prototype.findNextPoint = function(){
    var lastPoint = this.Points[this.Points.length -1];

    var allPosition = gitter.getAllNeighbors(lastPoint.x, lastPoint.y);
    if (this.direction == "random"){
        var newPosition = allPosition[getRandomInt(0,5)];
    } else {
        var newPosition = allPosition[this.direction];
    }
    lastPoint.x = newPosition[0];
    lastPoint.y = newPosition[1];

    if (this.orientation !== undefined & this.orientation == "random"){
        lastPoint.opt.orientation = getRandomInt(0,2);
    }
    if (this.orientation !== undefined & !isNaN(this.orientation)){
        lastPoint.opt.orientation = this.orientation;
    }

    return lastPoint;
};

rndWalk.prototype.addRandomPoint = function() {

    return {
        x: getRandomInt(0, 14), y: getRandomInt(0, 31),
        opt: {color: this.actColor}
    };
}

rndWalk.prototype.getRNDColor = function () {
    return [getRandomInt(0,250),
            getRandomInt(0,250),
            getRandomInt(0,250)]
};