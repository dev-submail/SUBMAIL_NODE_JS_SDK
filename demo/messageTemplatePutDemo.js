var messageTemplatePut = require('../lib/messageTemplatePut');

var message = new messageTemplatePut();

message.set_id('AVQz73');
message.set_title('templatepostdxj');
message.set_signature('【SUBMAIL】');
message.set_content('您的验证码是@var(code),请在15分钟之内输入');
//AVQz73
message.templatePut();