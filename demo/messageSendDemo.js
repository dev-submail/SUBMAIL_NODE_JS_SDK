var MessageSend = require('../lib/messageSend');

var message = new MessageSend();

message.set_to('152********');
message.set_content('【SUBMAIL】您的验证码是888888，十分钟内有效');
message.set_tag('test1');

message.send();
