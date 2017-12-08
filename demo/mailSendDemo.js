var MailSend = require('../lib/mailSend.js');

var mailSend = new MailSend();

mailSend.add_to('leo@submail.cn');
mailSend.set_from('no-reply@insight.submail.cn');
mailSend.set_subject('submail通知邮件');
mailSend.set_text('此处应填写您具体想要发送的内容，太短的内容以及包含测试字样的文字非常容易被拦截');
mailSend.send();