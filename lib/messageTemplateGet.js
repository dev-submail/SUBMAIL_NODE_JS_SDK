var Message = require('./message.js');

function MessageTemplateGet() {
    this.template_id = '';

    this.get_id = function(template_id) {
        this.template_id = template_id;
    };


    this.build_params = function() {
        var params = {};
        if (this.template_id != '') {
            params['template_id'] = this.template_id;
        }
        return params;
    };
    this.templateGet = function() {
        var message = new Message();
        message.templateGet(this.build_params());
    }
};

module.exports = MessageTemplateGet;