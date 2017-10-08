class rndPoints extends  Animation{
    constructor(){
        super();
    }

    setup(){
    	this.length = 2;
    };

    draw(){
    	while(this.Points.length > this.length - 1){
			this.Points.shift();

			if (this.Points.length === 0){
				this.Points.shift();
				break;
			}
		}

		this.Points.push(this.getRNDPoint());
		return  this.Points;
    }
}