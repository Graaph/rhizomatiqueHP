var animationManager = function(){
    this.animations = [];
	return this;
};

animationManager.prototype.addAnimation = function(anim) {
    this.animations.push(anim);

    console.log("addAnimation")
};

animationManager.prototype.flushAnimations = function(){
    this.animations = [];
};

animationManager.prototype.setup = function(){

	console.log("setup AM - animationcount: " + this.animations.length)

    for (i in this.animations){
		this.animations[i].setup()
	}
}

animationManager.prototype.draw = function(){

	for (i in this.animations){
		var retVal = this.animations[i].draw();

		_.each(retVal,function (elemt,index,list) {
            rS.addChangedPixel(elemt.x,elemt.y,elemt.opt)
        })
	}
}

var aM = new animationManager();