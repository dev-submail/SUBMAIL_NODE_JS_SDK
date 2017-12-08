var Mail = require('./mail.js');

function MailXSend() {
    this.to = [];
    this.to_name = [];
    this.from = '';
    this.from_name = '';
    this.addressbook = [];
    this.cc = [];
    this.bcc = [];
    this.reply = '';
    this.subject = '';
    this.project = '';
    this.vars = {};
    this.links = {};
    this.headers = {};

    // set email
    this.add_to = function(address) {
        this.to.push(address);
    };

    this.add_to_name = function(name) {
        this.to_name.push(name);
    };

    this.add_addressbook = function(addressbook) {
        this.addressbook.push(addressbook);
    };

    this.set_from = function(from) {
        this.from = from;
    };

    this.set_from_name = function(name) {
        this.from_name = name;
    };

    this.set_reply = function(reply) {
        this.reply = reply;
    };

    this.add_cc = function(address) {
        this.cc.push(address);
    };

    this.add_bcc = function(address) {
        this.bcc.push(address);
    };

    this.set_subject = function(subject) {
        this.subject = subject;
    };

    this.set_project = function(project) {
        this.project = project;
    };

    this.add_var = function(key, val) {
        this.vars[key] = val;
    };

    this.add_link = function(key, val) {
        this.links[key] = val;
    };

    this.add_headers = function(key, val) {
        this.headers[key] = val;
    };

    this.build_params = function() {
        var params = {};
        if (this.to.length > 0) {
            var toValue = '';
            for (index in this.to) {
                var name = ''
                if (this.to_name[index] != undefined) {
                    name = this.to_name[index];
                }
                toValue += name + '<' + this.to[index] + '>,';
            }
            params['to'] = toValue.substring(0, toValue.length-1);
        }
        if (this.addressbook.length > 0) {
            var addressbookValue = '';
            for (index in this.addressbook) {
                addressbookValue += this.addressbook[index] + ',';
            }
            params['addressbook'] = addressbookValue.substring(0, addressbookValue.length-1);
        }
        if (this.from != '') {
            params['from'] = this.from;
        }
        if (this.from_name != '') {
            params['from_name'] = this.from_name;
        }
        if (this.reply != '') {
            params['reply'] = this.reply;
        }
        if (this.cc.length > 0) {
            var ccValue = '';
            for (index in this.cc) {
                ccValue += this.cc[index] + ',';
            }
            params['cc'] = ccValue.substring(0, ccValue.length-1);
        }
        if (this.bcc.length > 0) {
            var bccValue = '';
            for (index in this.bcc) {
                bccValue += this.bcc[index] + ',';
            }
            params['bcc'] = bccValue.substring(0, bccValue.length-1);
        }
        if (this.subject != '') {
            params['subject'] = this.subject;
        }
        if (this.project != '') {
            params['project'] = this.project;
        }
        if (Object.keys(this.vars).length > 0) {
            params['vars'] = JSON.stringify(this.vars);
        }
        if (Object.keys(this.links).length > 0) {
            params['links'] = JSON.stringify(this.links);
        }
        if (Object.keys(this.headers).length > 0) {
            params['headers'] = JSON.stringify(this.headers);
        }
        return params;
    };
    this.xsend = function() {
        var mail = new Mail();
        mail.xsend(this.build_params());
    }
};

module.exports = MailXSend;
