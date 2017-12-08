var MessageXSend = require('../lib/messageXSend');

var message = new MessageXSend();

message.set_to('152********');
message.set_project('rBgTA4');
message.add_var('code', '88888888');
message.set_tag('test1');

message.xsend();
