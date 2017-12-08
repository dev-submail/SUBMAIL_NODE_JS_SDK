var IntersmsXSend = require('../lib/intersmsXSend');

var intersms = new IntersmsXSend();

intersms.set_to('+155********');
intersms.set_project('rBgTA4');
intersms.add_var('code', '88888888');

intersms.xsend();
