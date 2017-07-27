function setFrameRateByBPM(bpm){

	changesPerSecond = bpm / 60.0 

	console.log(changesPerSecond)

	//frameRate(changesPerSecond)	
}





function square(){
	return 
}









function colorLFO(element_index, rate,rgb_vector,wave){
	this.element 	= element_index;
	this.rate 		= rate;					// in Frames
	this.rgb_vector = rgb_vector;

	this.amplitude 	= 0;
	this.wave 		= wave;		 			// sine, saw, tri, square  

	return this;
}

colorLFO.prototype.update = function(first_argument) {
	var old_tint = this.getElement();
	var allFrames = getAllFrames();

	var t = allFrames % this.rate;

	var returnRgb = this.rgb_vector

	switch(this.wave){
		case 'sine':
			break;
		case 'saw':
			var delta = t / this.rate; 
			break;
		case 'tri':
			var delta = t / this.rate;
			this.amplitud
			break;
		case 'square':
			break;
	}

	return this.amplitude;
};