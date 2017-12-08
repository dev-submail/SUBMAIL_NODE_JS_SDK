var Voice = require('./voice.js');

function VoiceCode() {
    this.to = '';
    this.code = '';

    this.set_to = function(mob) {
        this.to = mob;
    };

    this.set_code = function(code) {
        this.code = code;
    };


    this.build_params = function() {
        var params = {};
        if (this.to != '') {
            params['to'] = this.to;
        }
        if(this.code != '') {
            params['code'] = this.code;
        }
        return params;
    };
    this.verify = function() {
        var voice = new Voice();
        voice.verify(this.build_params());
    }
};

module.exports = VoiceCode;