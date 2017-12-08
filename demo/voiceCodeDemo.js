var VoiceCode = require('../lib/voiceCode');

var voice = new VoiceCode();

voice.set_to('152********');
voice.set_code('1234');

voice.verify();
