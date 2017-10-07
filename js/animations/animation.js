"use strict";

const DEFAULT_ANIMATION = {
    start       : [0,0],
    rndStart    : false,

    length      : 8,

    color       : [127,127,127],
    orientation : 0,

    rndColor    : false,
    rndBias     : 0,
};

class Animation{
	constructor(initCfg) {
        this.defaultCfg = DEFAULT_ANIMATION;
        this.loadConfiguration(initCfg);

        this.Points = [];
    }

    addPoint(newPoint){
	    this.Points.push(newPoint);
    }

    removePoint(position){
        this.Points.splice(position, 1);
    }

    removeLastPoint(position){
        this.Points.pop();
    }

    loadConfiguration(initCfg){
        if(typeof(initCfg) === 'object'){
            for (let key in initCfg){
                this.defaultCfg[key] = initCfg[key]
            }
        }

        for (let key in this.defaultCfg){
            this[key] = this.defaultCfg[key]
        }
    }

	// sets up all important shit
	setup(){
	}

	// returns a array of pixel to be drawn
	draw(){
    }
}


class Point extends  Animation{
    constructor(pos){
        super();
        this.pos = pos;
    }

    setup(){

    };

    draw(){
        let retVal = {
            x : this.pos[0],
            y : this.pos[1],
            opt : {
                color : this.color,
            }
        };
        return [retVal];
    }

}