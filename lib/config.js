var Config = {
     /*
     * service接口配置
     */
     timestampConfig : {
        timestamp_uri: "https://api.mysubmail.com/service/timestamp.json"
     },
    /*
     * 邮件配置
     */
    mailConfig : {
        xsend_uri : 'https://api.mysubmail.com/mail/xsend.json',
        send_uri  : 'https://api.mysubmail.com/mail/send.json',
        subscribe_uri : 'https://api.mysubmail.com/addressbook/mail/subscribe.json',
        unsubscribe_uri : 'https://api.mysubmail.com/addressbook/mail/unsubscribe.json',
        appid: 'your mail appid',
        appkey: 'your mail appkey',
        signtype: 'normal'     /*可选参数normal,md5,sha1*/
    },
    /*
     * 短信配置
     */
    messageConfig : {
        xsend_uri : 'https://api.mysubmail.com/message/xsend.json',
        send_uri  : 'https://api.mysubmail.com/message/send.json',
        multiXsend_uri : 'https://api.mysubmail.com/message/multixsend.json',
        subscribe_uri : 'https://api.mysubmail.com/addressbook/message/subscribe.json',
        unsubscribe_uri : 'https://api.mysubmail.com/addressbook/message/unsubscribe.json',
        template_uri : 'https://api.mysubmail.com/message/template.json',
        
        appid : 'your message appid',
        appkey : 'your message appkey',
        signtype : 'normal'   /*可选参数normal,md5,sha1*/
    },
    /*
     * 语音配置
     */
    voiceConfig : {
        code_uri : 'https://api.mysubmail.com/voice/verify',
        xsend_uri : 'https://api.mysubmail.com/voice/xsend.json',
        send_uri  : 'https://api.mysubmail.com/voice/send.json',
        multiXsend_uri : 'https://api.mysubmail.com/voice/multixsend.json',
        appid : 'your voice appid',
        appkey : 'your voice appkey',
        signtype : 'md5'   /*可选参数normal,md5,sha1*/
    },
    /*
     * 国际短信配置
     */
    inter_smsConfig : {
        xsend_uri : 'https://api.mysubmail.com/internationalsms/xsend.json',
        send_uri  : 'https://api.mysubmail.com/internationalsms/send.json',
        multiXsend_uri : 'https://api.mysubmail.com/internationalsms/multixsend.json',
        appid : 'your message appid',
        appkey : 'your voice appkey',
        signtype : 'normal'    /*可选参数normal,md5,sha1*/
    }

};

module.exports = Config;
