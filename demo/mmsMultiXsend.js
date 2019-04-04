var MMSMultiXsend = require('../lib/mMSMultiXsend');
var Multi = require('../lib/multiData');

var mms = new MMSMultiXsend();


var data = ['176xxx9','1822xxx49'];

for(index in data) {
     var multi = new Multi();
     multi.set_to(data[index]);
     multi.add_var('code','123555');
    //  multi.add_var('number','123345');
     mms.add_multi(multi);
}

mms.set_project('kISUo2');
mms.set_tag('test1');
mms.multiXsend();
