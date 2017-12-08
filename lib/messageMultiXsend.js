var Message = require('./message.js');

function MessageMultiXsend() {
    this.multi = [];
    this.project = '';
    this.tag = '';

    this.add_multi = function(multi) {
        this.multi.push(multi);
    };

    this.set_project = function(project) {
        this.project = project;
    };

    this.set_tag = function(tag) {
        this.tag = tag;
    }

    this.build_params = function() {
        var params = {};
        if (this.tag != '') {
            params['tag'] = this.tag;
        }
        if (this.project != '') {
            params['project'] = this.project;
        }
        if (this.multi.length > 0) {
            params['multi'] = JSON.stringify(this.multi);
        }
        return params;
    };
    this.multiXsend = function() {
        var message = new Message();
        message.multiXsend(this.build_params());
    }
};

module.exports = MessageMultiXsend;