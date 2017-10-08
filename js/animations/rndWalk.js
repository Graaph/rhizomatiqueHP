"use strict";

class rndWalk extends  Animation {
    constructor(opt) {
        super();

        if (opt === undefined) {
            opt = {};
        }

        if ("length" in opt) {
            this.length = opt.length;
        } else {
            this.length = 15;
        }

        if ("direction" in opt) {
            this.direction = opt.direction
        } else {
            this.direction = "random"
        }

        if ("orientation" in opt) {
            this.orientation = opt.orientation;
        }

        if (opt.hasOwnProperty("color") & !(opt.color === "rnd")) {
            this.color = opt.color;
        } else {
            this.color = this.getRNDColor()
        }

        if (opt.hasOwnProperty("rndColor")) {
            this.rndColor = opt.rndColor;
        } else {
            this.rndColor = false;
        }

        if (opt.hasOwnProperty("rndBias")) {
            this.rndBias = opt.rndBias;
        } else {
            this.rndBias = 0;
        }
    }

    setup() {
        console.log("setup rndWalk")
        this.Points.push(this.addRandomPoint());
    }


    draw() {
        const nextPoint = this.findNextPoint();

        while(this.Points.length > this.length - 1){
			this.Points.shift();

			if (this.Points.length === 0){
				this.Points.shift();
				break;
			}
		}

		if (frameCount % this.length === 0 && this.rndColor){
            //nextPoint.opt.color = colorLib.rndColor(nextPoint.opt.color,this.rndBias);
            this.color = colorLib.rndColor(nextPoint.opt.color,this.rndBias)
        }

        this.Points.push(nextPoint);
        return this.Points
    }

    findNextPoint() {
        let nextPoint = { x : 0, y :0, opt : {color : [0,0,0], orientation : 0}};
        const lastPoint = this.Points[this.Points.length -1];

        const allPosition = gitter.getAllNeighbors(lastPoint.x, lastPoint.y);
        let newPosition = 0;
        if (this.direction === "random"){
             newPosition = allPosition[getRandomInt(1,5)];
        } else {
             newPosition = allPosition[this.direction];
        }
        nextPoint.x = newPosition[0];
        nextPoint.y = newPosition[1];

        nextPoint.opt.color = this.color;

        if (this.orientation !== undefined && this.orientation === "random"){
            nextPoint.opt.orientation = getRandomInt(0,2);
        }
        if (this.orientation !== undefined && !isNaN(this.orientation)){
            nextPoint.opt.orientation = this.orientation;
        }

        return nextPoint;
    }

    addRandomPoint(){
        const newX = getRandomInt(0, 14);
        const newY = getRandomInt(0, 31);

        return {
            x: newX,
            y: newY,
            opt: {
                color: this.color
            }
        };

    }

    getRNDColor () {
        return [getRandomInt(0,250),
                getRandomInt(0,250),
                getRandomInt(0,250)]
    }

}