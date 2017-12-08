var request = require('request');
var crypto = require('crypto');
var config = require('./config.js');

function Mail() {
    this.appid = config.mailConfig.appid;
    this.signtype = config.mailConfig.signtype;
    this.appkey = config.mailConfig.appkey;
    this.xsend_uri = config.mailConfig.xsend_uri;
    this.send_uri = config.mailConfig.send_uri;
    this.subscribe_uri = config.mailConfig.subscribe_uri;
    this.unsubscribe_uri = config.mailConfig.unsubscribe_uri;
    this.timestamp_uri = config.timestampConfig.timestamp_uri;


    this.send = function(params) {
        var api = this.send_uri;
        var requestParams = params;
        requestParams['appid'] = this.appid;
        var self = this;
        request({
            uri: this.timestamp_uri,
            method: 'GET'
        }, function(error, response, body) {
            var result = JSON.parse(body);
            requestParams['timestamp'] = result["timestamp"];
            requestParams['sign_type'] = self.signtype;
            requestParams['signature'] = self.createSignature(requestParams);
            request.post({url: api, formData: requestParams}, function optionalCallback(err, httpResponse, body) {
                if (err) {
                    return console.error('upload failed:', err);
                }
                console.log('Upload successful!  Server responded with:', body);
            });
        });
    };
    this.xsend = function(params) {
        var api = this.xsend_uri;
        var requestParams = params;
        requestParams['appid'] = this.appid;
        var self = this;
        request({
            uri: this.timestamp_uri,
            method: 'GET'
        }, function(error, response, body) {
            var result = JSON.parse(body);
            requestParams['timestamp'] = result["timestamp"];
            requestParams['sign_type'] = self.signtype;
            requestParams['signature'] = self.createSignature(requestParams);
            request.post({url: api, formData: requestParams}, function optionalCallback(err, httpResponse, body) {
                if (err) {
                    return console.error('upload failed:', err);
                }
                console.log('Upload successful!  Server responded with:', body);
            });
        });
    };
    this.subscribe = function(params) {
        var api = this.subscribe_uri;
        var requestParams = params;
        requestParams['appid'] = this.appid;
        var self = this;
        request({
            uri: this.timestamp_uri,
            method: 'GET'
        }, function(error, response, body) {
            var result = JSON.parse(body);
            requestParams['timestamp'] = result["timestamp"];
            requestParams['sign_type'] = self.signtype;
            requestParams['signature'] = self.createSignature(requestParams);
            request.post({url: api, formData: requestParams}, function optionalCallback(err, httpResponse, body) {
                if (err) {
                    return console.error('upload failed:', err);
                }
                console.log('Upload successful!  Server responded with:', body);
            });
        });
    };
    this.unsubscribe = function(params) {
        var api = this.unsubscribe_uri;
        var requestParams = params;
        requestParams['appid'] = this.appid;
        var self = this;
        request({
            uri: this.timestamp_uri,
            method: 'GET'
        }, function(error, response, body) {
            var result = JSON.parse(body);
            requestParams['timestamp'] = result["timestamp"];
            requestParams['sign_type'] = self.signtype;
            requestParams['signature'] = self.createSignature(requestParams);
            request.post({url: api, formData: requestParams}, function optionalCallback(err, httpResponse, body) {
                if (err) {
                    return console.error('upload failed:', err);
                }
                console.log('Upload successful!  Server responded with:', body);
            });
        });
    };
    this.createSignature = function(params) {
        if (this.signtype == 'normal') {
            return this.appkey;
        } else {
            return this.buildSignature(params);
        }
    };

    this.buildSignature = function(params) {
        var sortedParams = this.sortOnKeys(params);
        var signStr = "";
        for(var key in sortedParams) {
            signStr += key + '=' + sortedParams[key] + '&';
        }
        signStr = signStr.substring(0, signStr.length-1);
        signStr = this.appid + this.appkey + signStr + this.appid + this.appkey;
        if (this.signtype == 'md5') {
            var md5sum = crypto.createHash('md5');
            md5sum.update(signStr);
            return md5sum.digest('hex');
        }
        if (this.signtype == 'sha1') {
            var sha1sum = crypto.createHash('sha1');
            sha1sum.update(signStr);
            return sha1sum.digest('hex');
        }
        return '';
    };

    this.sortOnKeys = function(dict) {
        var sorted = [];
        for(var key in dict) {
            if (key == 'attachments') {
                continue;
            }
            sorted[sorted.length] = key;
        }
        sorted.sort();

        var tempDict = {};
        for(var i = 0; i < sorted.length; i++) {
            tempDict[sorted[i]] = dict[sorted[i]];
        }

        return tempDict;
    };
};


module.exports = Mail;
