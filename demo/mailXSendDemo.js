var MailXSend = require('../lib/mailXSend.js');

var mailXSend = new MailXSend();

mailXSend.add_to('leo@submail.cn');
mailXSend.add_to_name('SUBMAIL');
mailXSend.set_from('no-reply@insight.submail.cn');
mailXSend.set_project('ZvNGo');

mailXSend.xsend();
