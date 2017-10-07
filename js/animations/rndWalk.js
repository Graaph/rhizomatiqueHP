var rndWalk = function (opt) {

    if (opt === undefined){
	    opt = {};
    }

	if ("length" in opt){
       this.length = opt.length;
    } else {
	    this. length = 15;
	}

    if ("direction" in opt){
	    this.direction = opt.direction
    } else {
        this.direction = "random"
    }

    if ("orientation" in opt){
        this.orientation = opt.orientation;
    }

    if (opt.hasOwnProperty("color") & !(opt.color === "rnd") ){
        this.actColor = opt.color;
    } else {
        this.actColor = this.getRNDColor()
    }

    if (opt.hasOwnProperty("rndColor")){
        this.rndColor = opt.rndColor;
    } else {
        this.rndColor = false;
    }

    if (opt.hasOwnProperty("rndBias")){
        this.rndBias = opt.rndBias;
    } else {
        this.rndBias = 0;
    }


};

rndWalk.prototype.setup = function() {
    console.log("setup rndWalk")

    this.Points = new Array();

    var startPoint = 	this.addRandomPoint();

    this.Points.push(startPoint);



};

rndWalk.prototype.draw = function() {
    var nextPoint = this.findNextPoint();


    if (this.Points.length > this.length){
        //this.Points.shift();
    }

    if (frameCount%this.length === 0 && this.rndColor){
        nextPoint.opt.color = colorLib.rndColor(nextPoint.opt.color,this.rndBias);
    }

    this.Points.push(nextPoint);


    return this.Points
};


rndWalk.prototype.findNextPoint = function(){
    var lastPoint = this.Points[this.Points.length -1];


    var allPosition = gitter.getAllNeighbors(lastPoint.x, lastPoint.y);
    var newPosition = 0;
    if (this.direction === "random"){
         newPosition = allPosition[getRandomInt(1,5)];
    } else {
         newPosition = allPosition[this.direction];
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
    var newX = getRandomInt(0, 14);
    var newY = getRandomInt(0, 31);

    var randomPoint =  {
        x: newX,
        y: newY,
        opt: {
            color: this.actColor
        }
    };

    return randomPoint;
}

rndWalk.prototype.getRNDColor = function () {
    return [getRandomInt(0,250),
            getRandomInt(0,250),
            getRandomInt(0,250)]
};


rndWalk.prototype.setColorR = function(r){
	this.actColor[0] = r;
};

rndWalk.prototype.setColorG = function(g){
	this.actColor[1] = g;
};

rndWalk.prototype.setColorB = function(b){
	this.actColor[2] = b;
};