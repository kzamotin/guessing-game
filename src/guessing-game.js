class GuessingGame {
    constructor() {
    this.min = 0;
    this.max = 0;
    this.guession =0; }

    setRange(min, max) {
	this.min = min;
    this.max = max;
    this.guession = Math.round((this.min + this.max)/2)+0;
    }

    guess() {
	return this.guession;
    }

    lower() {
	this.max=this.guession +0;
	this.guession = Math.round((this.min + this.max)/2)+0;
	console.log("lower", this.min, this.max, this.guession)
	
    }

    greater() {
	this.min=this.guession;
	this.guession = Math.round((this.min + this.max)/2) +0;
	console.log("greater", this.min, this.max, this.guession)
	
	
    }
}

module.exports = GuessingGame;
