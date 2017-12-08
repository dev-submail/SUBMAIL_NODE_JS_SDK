var Message = require('../lib/message.js');

function AddressbookMessage() {
    this.address = '';
    this.address_name = '';
    this.target = '';

    this.set_address = function(address) {
        this.address = address;
    };

    this.set_addressbook = function(target) {
        this.target = target;
    };

    this.build_params = function() {
        var params = {};
        params['address'] = this.address;
        if (this.target != '') {
            params['target'] = this.target;
        }
        return params;
    };
    this.subscribe = function() {
        var addressbook = new Message();
        addressbook.subscribe(this.build_params());
    };
    this.unsubscribe = function() {
        var addressbook = new Message();
        addressbook.unsubscribe(this.build_params());
    }
};

module.exports = AddressbookMessage;
