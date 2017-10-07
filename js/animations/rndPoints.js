var rndPoints= function (opt) {}

rndPoints.prototype.setup = function(initPos,initColor) {
	this.Points = []
    this.length = 2
	this.color = [127,0,0]
	this.bias = 0;
};

rndPoints.prototype.draw = function() {
	console.log(this.Points.length);

    while(this.Points.length > this.length - 1){
        this.Points.shift();
        console.log("shift , ",this.Points.length)

        if (this.Points.length === 0){
            this.Points.shift();
            break;
        }
    }



	this.Points.push(this.addPoint())
	return  this.Points;
};

rndPoints.prototype.setColorR = function(r){
	this.color[0] = r;
};

rndPoints.prototype.setColorG = function(g){
	this.color[1] = g;
};

rndPoints.prototype.setColorB = function(b){
	this.color[2] = b;
};

rndPoints.prototype.setLength = function (length) {
    this.length = length;
};

rndPoints.prototype.addPoint = function(){
	return {	x : getRandomInt(0,14),
                y : getRandomInt(0,31),
				opt: {
					color : colorLib.rndColor(this.color,this.bias)
				},
			};
};