var IntersmsMultiXsend = require('../lib/intersmsMultiXsend');
var Multi = require('../lib/multiData');

var intersms = new IntersmsMultiXsend();


var data = ['+152********','+186********','+133********'];

for(index in data) {
     var multi = new Multi();
     multi.set_to(data[index]);
     multi.add_var('code','1234');
     intersms.add_multi(multi);
}

intersms.set_project('rBgTA4');

intersms.multiXsend();