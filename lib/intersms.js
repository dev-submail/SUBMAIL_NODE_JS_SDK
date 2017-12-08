var request = require('request');
var crypto = require('crypto');
var config = require('./config.js');

function Intersms() {
    this.appid = config.inter_smsConfig.appid;
    this.signtype = config.inter_smsConfig.signtype;
    this.appkey = config.inter_smsConfig.appkey;
    this.xsend_uri = config.inter_smsConfig.xsend_uri;
    this.send_uri = config.inter_smsConfig.send_uri;
    this.multiXsend_uri = config.inter_smsConfig.multiXsend_uri;
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
                    return console.error(err);
                }
                console.log(body);
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
                    return console.error(err);
                }
                console.log(body);
            });
        });
    };
    this.multiXsend = function(params){
        var api = this.multiXsend_uri;
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
            console.log(api);
            request.post({url: api, formData: requestParams}, function optionalCallback(err, httpResponse, body) {
                if (err) {
                    return console.error(err);
                }
                console.log(body);
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
        var filterArr = [];
        filterArr.push('tag');
        var sortedParams = this.sortOnKeys(params);
        var signStr = "";
        for(var key in sortedParams) {
            if(filterArr.indexOf(key) == -1){
                signStr += key + '=' + sortedParams[key] + '&';
            }    
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

module.exports = Intersms;
