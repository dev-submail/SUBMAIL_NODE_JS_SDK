


function multiData() {
	this.to = '';
	this.vars = {};

    this.set_to = function(mob){
        this.to = mob;
    }

    this.add_var = function(key, val) {
        this.vars[key] = val;
    }
}
module.exports = multiData;