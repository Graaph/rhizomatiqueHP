var animationManager = function(){
    this.animations = [];
	return this;
};

animationManager.prototype.addAnimation = function(anim) {
    this.animations.push(anim);
};

animationManager.prototype.flushAnimations = function(){
    this.animations = [];
};

animationManager.prototype.setup = function(){

    for (i in this.animations){
		this.animations[i].setup()
	}
}

animationManager.prototype.draw = function(){

	for (i in this.animations){
		retVal = this.animations[i].draw();

		for (i in retVal){
			rS.addChangedPixel(retVal[i].x,retVal[i].y,retVal[i].opt)
		}

	}
}

var aM = new animationManager();