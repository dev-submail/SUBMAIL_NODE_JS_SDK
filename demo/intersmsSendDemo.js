var IntersmsSend = require('../lib/intersmsSend');

var intersms = new IntersmsSend();

intersms.set_to('+152********');
intersms.set_content('【SUBMAIL】您的验证码是888888，十分钟内有效');

intersms.send();
