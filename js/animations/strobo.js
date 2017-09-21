var strobo = function (opt) {
    this.length = 2;

    this.show = true;
}

strobo.prototype.setup = function() {
    this.Zeug = [];
	for (var i=0; i < mC.Ny; i++) {
		for (var j=0; j < mC.Nx; j++) {
			this.Zeug.push({
			    x : j, y : i,
                opt : {
			        color : [250,255,255],
                    orientation : 1,

			    }
            })
		}
	}


};

strobo.prototype.draw = function() {

    if (frameCount % this.length === 0){
        this.show = !this.show;
    }

    if (this.show){
	    return  this.Zeug;
    } else {
        return [];
    }
};
