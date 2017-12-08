var VoiceMultiXsend = require('../lib/voiceMultiXsend');
var Multi = require('../lib/multiData');

var voice = new VoiceMultiXsend();


var data = ['152********','186********','133********'];

for(index in data) {
     var multi = new Multi();
     multi.set_to(data[index]);
     multi.add_var('name','name');
     voice.add_multi(multi);
}

voice.set_project('vLTXZ');

voice.multiXsend();
