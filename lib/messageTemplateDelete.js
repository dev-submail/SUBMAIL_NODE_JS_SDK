var Message = require('./message.js');

function MessageTemplateDelete() {

    this.template_id = '';

    this.set_id = function(id) {
        this.template_id = id;
    };


    this.build_params = function() {
        var params = {};
        if (this.template_id != '') {
            params['template_id'] = this.template_id;
        }
        return params;
    };
    this.templateDelete = function() {
        var message = new Message();
        message.templateDelete(this.build_params());
    }
};

module.exports = MessageTemplateDelete;