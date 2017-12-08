var MessageTemplatePost = require('../lib/messageTemplatePost');

var message = new MessageTemplatePost();

message.set_title('templatepostdxj');
message.set_signature('【SUBMAIL】');
message.set_content('您的验证码是@var(code),请在15分钟之内输入！');
//AVQz73
message.templatePost();
