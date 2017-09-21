var circleLooper= function (opt) {};

circleLooper.prototype.setup = function(initPos,initColor) {
    this.midlePoint = this.addRandomPoint();
    this.period = 2
    this.pol = true;
};

circleLooper.prototype.draw = function() {
   var Points = [];

   Points.push(this.midlePoint);

   if (frameCount%this.period === 0){
       this.pol = !this.pol;
   }

   if (this.pol){
       var allPosition = gitter.getAllNeighbors(this.midlePoint.x, this.midlePoint.y);

       for (pos in allPosition) {
           Points.push({
               x: allPosition[pos][0],
               y: allPosition[pos][1],
               opt: this.midlePoint.opt
           })
       }
   }

   return Points;

};

circleLooper.prototype.addRandomPoint = function(){
	return {	x : getRandomInt(0,14),y : getRandomInt(0,31),
				opt: {
					color : [
						getRandomInt(100,255),
                        getRandomInt(100,255),
                        getRandomInt(100,255)],
				},
			};
};