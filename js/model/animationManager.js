var animationManager = function(){
	console.log("init am")
    this.animations = [new rndPoints()]

	return this;
}

animationManager.prototype.addAnimation = function(anim) {
	this.animations.push(anim);
};

animationManager.prototype.setup = function(){
    console.log("AM Setup")
    for (i in this.animations){
    	console.log("setup animation:",i)
		this.animations[i].setup()
	}
}

animationManager.prototype.draw = function(){

	for (i in this.animations){
		retVal = this.animations[i].draw();

		_.map(retVal, function(value,key){
			rS.addChangedPixel(value.x,value.y,value.opt)
		})
	}
}

var aM = new animationManager();