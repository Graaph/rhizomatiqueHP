var logo= function (opt) {};

logo.prototype.setup = function(initPos, initColor) {
    this.midlePoint = this.addRandomPoint();
    this.period = 2
    this.pol = true;

    this.setupPoints();
};

logo.prototype.draw = function() {


   /*if (frameCount%this.period === 0){
       this.pol = !this.pol;
   }
   if (this.pol){

   }*/

   return this.Points;

};

logo.prototype.setupPoints = function () {
    this.Points = [];

    this.midlePoint.opt.orientation = 0;
    this.Points.push(this.midlePoint);


     var allPosition = gitter.getAllNeighbors(this.midlePoint.x, this.midlePoint.y);
     var Orientation  = [1,2,3,4,5,0];

       for (pos in allPosition) {
           console.log({
               x: allPosition[pos][0],
               y: allPosition[pos][1],
               opt: {
                   "color" : this.midlePoint.opt.color,
                   "orientation" : Orientation[pos],
               }
           });
           this.Points.push({
               x: allPosition[pos][0],
               y: allPosition[pos][1],
               opt: {
                   "color" : this.midlePoint.opt.color,
                   "orientation" : Orientation[pos],
               }
           })
       }

}

logo.prototype.addRandomPoint = function(){
	return {	x : getRandomInt(0,14),y : getRandomInt(0,31),
				opt: {
					color : [
						getRandomInt(0,255),
                        getRandomInt(0,255),
                        getRandomInt(0,255)],
				},
			};
};