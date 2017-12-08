var Message = require('./message.js');

function MessageSend() {
    this.to = '';
    this.content = '';
    this.tag = '';

    this.set_to = function(mob) {
        this.to = mob;
    };

    this.set_content = function(content) {
        this.content = content;
    };

    this.set_tag = function(tag) {
        this.tag = tag;
    }

    this.build_params = function() {
        var params = {};
        if (this.to != '') {
            params['to'] = this.to;
        }
        if(this.content != '') {
            params['content'] = this.content;
        }
        if(this.tag != ''){
            params['tag'] = this.tag;
        }
        return params;
    };
    this.send = function() {
        var message = new Message();
        message.send(this.build_params());
    }
};

module.exports = MessageSend;