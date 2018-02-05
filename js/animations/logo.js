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
         console.log(allPosition)
         var Orientation  = [0,0,0,0,0,0];

           for (let pos in allPosition) {
               console.log(Orientation[pos])
               this.Points.push({
                   x: allPosition[pos][0],
                   y: allPosition[pos][1],
                   opt: {
                       "color" : [
                           0,
                           pos == 4 ? 200:0,
                           0],
                       "orientation" : pos,
                   }

               })
           }
           for (let p in this.Points){
               console.log(this.Points[p].x,this.Points[p].y,this.Points[p].opt.color[0])
           }

           console.log(this.Points)

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



