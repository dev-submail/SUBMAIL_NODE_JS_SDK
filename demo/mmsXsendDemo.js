var MMSXSend = require('../lib/mmsXsend');

var mms = new MMSXSend();

mms.set_to('17602115149');
mms.set_project('kISUo2');
mms.add_var('code', '88888888');
mms.set_tag('test1');

mms.xsend();
