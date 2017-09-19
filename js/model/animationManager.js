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

		_.map(retVal, function(value,key){
			rS.addChangedPixel(value.x,value.y,value.opt)
		})
	}
}

var aM = new animationManager();