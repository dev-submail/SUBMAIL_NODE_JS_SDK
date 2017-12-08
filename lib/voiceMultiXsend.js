var Voice = require('./voice.js');

function VoiceMultiXsend() {
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
        var voice = new Voice();
        voice.multiXsend(this.build_params());
    }
};

module.exports = VoiceMultiXsend;