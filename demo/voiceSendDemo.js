var VoiceSend = require('../lib/voiceSend');

var voice = new VoiceSend();

voice.set_to('152********');
voice.set_content('尊敬的用户，您的外卖即将送达，请保持电话通畅，谢谢');

voice.send();
