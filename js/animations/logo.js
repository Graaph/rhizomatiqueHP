"use strict";

class logo extends  Animation{
    constructor(){
        super();
    }

    setup(){
        this.midlePoint = logo.addRandomPoint();
        this.period = 2;
        this.pol = true;

        this.setupPoints();
    };

    draw(){
        return this.Points;
    }

    setupPoints() {
        this.Points = [];

        this.midlePoint.opt.orientation = 0;
        this.Points.push(this.midlePoint);


         var allPosition = gitter.getAllNeighbors(this.midlePoint.x, this.midlePoint.y);
         var Orientation  = [0,1,2,3,4,5];

           for (let pos in allPosition) {
               if (cfg.showXYNames) {
                   console.log({
                       x: allPosition[pos][0],
                       y: allPosition[pos][1],
                       opt: {
                           "color": this.midlePoint.opt.color,
                           "orientation": Orientation[pos],
                       }
                   });
               }
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

    static addRandomPoint(){
	    return {	x : getRandomInt(0,14),y : getRandomInt(0,31),
				opt: {
					color : [
						getRandomInt(0,255),
                        getRandomInt(0,255),
                        getRandomInt(0,255)],
				},
			};
    }
}



