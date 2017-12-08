var AddressbookMail = require('../lib/addressbookMail.js');

var addressbookMail = new AddressbookMail();

addressbookMail.set_address('leo@submail.cn');

addressbookMail.subscribe();
