var Intersms = require('./intersms.js');

function IntersmsMultiXsend() {
    this.multi = [];
    this.project = '';

    this.add_multi = function(multi) {
        this.multi.push(multi);
    };

    this.set_project = function(project) {
        this.project = project;
    };


    this.build_params = function() {
        var params = {};
        if (this.project != '') {
            params['project'] = this.project;
        }
        if (this.multi.length > 0) {
            params['multi'] = JSON.stringify(this.multi);
        }
        return params;
    };
    this.multiXsend = function() {
        var intersms = new Intersms();
        intersms.multiXsend(this.build_params());
    }
};

module.exports = IntersmsMultiXsend;