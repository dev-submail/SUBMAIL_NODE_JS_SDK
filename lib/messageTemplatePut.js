var Message = require('./message.js');

function MessageTemplatePut() {
    this.sms_title = '';
    this.sms_signature = '';
    this.sms_content = '';
    this.template_id = '';

    this.set_id = function(id) {
        this.template_id = id;
    };

    this.set_title = function(title) {
        this.sms_title = title;
    };

    this.set_signature = function(signature) {
        this.sms_signature = signature;
    };
    
    this.set_content = function(content) {
        this.sms_content = content;
    };

    this.build_params = function() {
        var params = {};
        if (this.template_id != '') {
            params['template_id'] = this.template_id;
        }
        if (this.sms_title != '') {
            params['sms_title'] = this.sms_title;
        }
        if (this.sms_signature != '') {
            params['sms_signature'] = this.sms_signature;
        }
        if (this.sms_content != '') {
            params['sms_content'] = this.sms_content;
        }
        return params;
    };
    this.templatePut = function() {
        var message = new Message();
        message.templatePut(this.build_params());
    }
};

module.exports = MessageTemplatePut;