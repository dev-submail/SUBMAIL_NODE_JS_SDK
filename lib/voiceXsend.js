var Voice = require('./voice.js');

function VoiceXSend() {
    this.to = '';
    this.project = '';
    this.vars = {};

    this.set_to = function(mob) {
        this.to = mob;
    };

    this.set_project = function(project) {
        this.project = project;
    };

    this.add_var = function(key, val) {
        this.vars[key] = val;
    };

    this.build_params = function() {
        var params = {};
        if (this.to != '') {
            params['to'] = this.to;
        }
        if (this.project != '') {
            params['project'] = this.project;
        }
        if (Object.keys(this.vars).length > 0) {
            params['vars'] = JSON.stringify(this.vars);
        }
        return params;
    };
    this.xsend = function() {
        var voice = new Voice();
        voice.xsend(this.build_params());
    }
};

module.exports = VoiceXSend;