var MessageMultiXsend = require('../lib/messageMultiXsend');
var Multi = require('../lib/multiData');

var message = new MessageMultiXsend();


var data = ['152********','186********','133********'];

for(index in data) {
     var multi = new Multi();
     multi.set_to(data[index]);
     multi.add_var('name','name');
     multi.add_var('number','123345');
     message.add_multi(multi);
}

message.set_project('JT66Z3');
message.set_tag('test1');

message.multiXsend();
