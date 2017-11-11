var Score = function (){};

Score.prototype.setup = function (timeline) {

    console.log("setup Score")
    this.timeline = timeline;

    this.sektionPointer = 0;
    this.roundsLeft = this.timeline[0].length * this.timeline[0].loops;

    this.loadSektion()
};

Score.prototype.update = function (framesPast) {
    if (framesPast % this.roundsLeft == 0){
        console.log("cahnging Scene");
        clear();

        this.sektionPointer = (this.sektionPointer + 1) % this.timeline.length;
        this.loadSektion()
    }
};

Score.prototype.loadSektion = function(){
    aM.flushAnimations();

    var newSektion = this.timeline[this.sektionPointer];
    for (anim in newSektion.animations){
        aM.addAnimation(newSektion.animations[anim]);
    }
    aM.setup();
};

var score = Score();















var Sektion = function (opt) {
    this.length = opt.length;
    this.loops = opt.loops;
    this.animations = opt.animations;
};

Sektion.prototype.getAnimations = function () {
    return this.animations;
};

Sektion.prototype.addAnimation = function(anim){
    this.animations.push(anim);
};