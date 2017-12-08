
# SUBMAIL NODE JS SDK

> 概览 

    SUBMAIL NODE JS SDK 需要 npm 支持。

> 文件目录索引

```
 lib --- 资源包 -----------------------------------------------------
     |
     |  --- config.js（用户 接口 url、appid 和 appkey 配置文件） 
     |  --- message.js（短信发送基类）
     |  --- mail.js（邮件发送基类）
     |  --- multiData.js（multi 数据类）
     |  --- voice.js（语音验证码和语音通知基类）
     |  --- intersms.js（国际短信发送基类）
     |  --- addressbookMail.js（邮件地址簿管理类）
     |  --- addressbookMessage.js（短信地址簿管理类）
     |  --- messageSend.js（短信 send 接口类）
     |  --- messageXsend.js（短信 xsend 接口类）
     |  --- messageMultiXsend.js（短信 multixsend 批量发送接口类）
     |  --- messageTemplatePost.js（创建短信模板类）
     |  --- messageTemplateDelete.js（删除短信模板类）
     |  --- messageTemplatePut.js （更新短信模板类）
     |  --- messageTemplateGet.js（获取短信模板类）
     |  --- mailSend.js（邮件 send 接口类）
     |  --- mailXsend.js（邮件 Xsend 接口类）
     |  --- voiceCode.js（语音验证码接口类）
     |  --- voiceSend.js（语音 send 接口类）
     |  --- voiceXsend.js（语音 Xsend 接口类）
     |  --- voiceMultiXsend.js（语音 multixsend 批量发送接口类）
     |  --- intersmsSend.js（国际短信 send 接口类）
     |  --- intersmsXsend.js（国际短信 Xsend 接口类）
     |  --- intersmsMultiXsend.js（国际短信 multixsend 批量发送接口类）
  demo --- 示例代码 --------------------------------------------------
     |
     |  --- addressbookMailSubscribeDemo.js
     |  --- addressbookMailUnsubscribeDemo.js
     |  --- addressbookMessageSubscribeDemo.js
     |  --- addressbookMessageUnsubscribeDemo.js
     |  --- messageSendDemo.js
     |  --- messageXSendDemo.js
     |  --- messageMultiXsendDemo.js
     |  --- messageTemplatePostDemo.js
     |  --- messageTemplateGetDemo.js
     |  --- messageTemplatePutDemo.js
     |  --- messageTemplateDeleteDemo.js
     |  --- mailSendDemo.js
     |  --- mailSendXDemo.js
     |  --- voiceCodeDemo.js
     |  --- voiceSendDemo.js
     |  --- voiceXsendDemo.js
     |  --- voiceMultiXsendDemo.js
     |  --- intersmsSendDemo.js
     |  --- intersmsXsendDemo.js
     |  --- intersmsMultiXsendDemo.js
     |  -------------------------------------------------------------
```
> 使用指引

    messageSend 类


方法/函数 | 参数说明
---|---
set_to() | 11位国内手机号码，仅支持单个号码
set_content()|  正文格式请参考 [SUBMAIL 开发文档](https://www.mysubmail.com/chs/documents/developer/YPWD84)
set_tag()| 标签参数，SUBHOOK 事件推送中会包含此参数，最大长度不超过32位


```
//示例代码

var MessageSend = require('../lib/messageSend');
var message = new MessageSend();

message.set_to('152********');
message.set_content('【SUBMAIL】您的验证码是：888888，10分钟内有效！');
message.set_tag('32KF2V444T89G923790237G09W0');
message.send();

```

    messageXSend 类


方法/函数 | 参数说明
---|---
set_to() | 11位国内手机号码，仅支持单个号码
set_project()|  如何获取模板 ID 请参考 [SUBMAIL 开发文档](https://www.mysubmail.com/chs/documents/developer/MmSw12)
add_var() |使用文本变量动态控制短信中的文本 
set_tag()| 标签参数，SUBHOOK 事件推送中会包含此参数，最大长度不超过32位


```
//示例代码

var MessageXSend = require('../lib/messageXSend');
var message = new MessageXSend();

message.set_to('152********');
message.set_project('rBfTA9');
message.add_var('code', '8888888');
message.set_tag('32KF2V444T89G923790237G09W0');
message.xsend();

```
   
    messageMultiXSend 类


方法/函数 | 参数说明
---|---
add_multi() | 收件人 to 联系人参数和 vars 文本变量的整合模式
set_project()|  如何获取模板 ID 请参考 [SUBMAIL 开发文档](https://www.mysubmail.com/chs/documents/developer/MmSw12)
set_tag()| 标签参数，SUBHOOK 事件推送中会包含此参数，最大长度不超过32位


```
//示例代码

var MessageMultiXsend = require('../lib/messageMultiXsend');
var Multi = require('../lib/multiData');
var message = new MessageMultiXsend();


var data = ['152********','186********','133********'];
for(index in data) {
     var multi = new Multi();
     multi.set_to(data[index]);
     multi.add_var('name','submail');
     multi.add_var('code','8888888');
     message.add_multi(multi);
}
message.set_project('rBfTA9');
message.set_tag('32KF2V444T89G923790237G09W0');
message.multiXsend();

``` 

    messageTemplatePost 类


方法/函数 | 参数说明
---|---
set_title() | 模板 ID（可选）
set_signature()|  设置短信模板签名，例如：【SUBMAIL】
set_content()| 设置模板内容，例如：您的验证码是@var(code)，10分钟内有效！


```
//示例代码

var MessageTemplatePost = require('../lib/messageTemplatePost');
var message = new MessageTemplatePost();

message.set_title('验证码模板');
message.set_signature('【SUBMAIL】');
message.set_content('您的验证码是@var(code),请在15分钟之内输入！');
message.templatePost();


``` 

     messageTemplateGet 类


方法/函数 | 参数说明
---|---
get_id() | 模板 ID（可选），此参数省略时获取账户内全部短信模板


```
//示例代码

var MessageTemplateGet = require('../lib/messageTemplateGet');
var message = new MessageTemplateGet();

message.get_id('AVQ2x3');
message.templateGet();


``` 

     messageTemplatePut 类


方法/函数 | 参数说明
---|---
set_id() | 要修改的短信模板 ID 
set_title() | 模板 ID（可选）
set_signature()|  设置短信模板签名，例如：【SUBMAIL】
set_content()| 设置模板内容，例如：您的验证码是@var(code)，10分钟内有效！


```
//示例代码

var messageTemplatePut = require('../lib/messageTemplatePut');
var message = new messageTemplatePut();

message.set_id('AVQz73');
message.set_title('验证码模板');
message.set_signature('【SUBMAIL】');
message.set_content('您的验证码是@var(code),请在15分钟之内输入,');
message.templatePut();


``` 

     messageTemplateDelete 类


方法/函数 | 参数说明
---|---
get_id() | 要删除的模板 ID


```
//示例代码

var messageTemplateDelete = require('../lib/messageTemplateDelete');
var message = new messageTemplateDelete();

message.set_id('BR56x3');
message.templateDelete();


``` 

    mailSend 类


方法/函数 | 参数说明
---|---
add_to() | 收件人地址
add_to_name() | 收件人姓名
add_addressbook() |添加地址簿中的联系人
set_from() | 发件人地址 ，标准的发件人地址 e.g. leo@submail.cn
set_from_name() | 发件人称呼，显示名称 e.g. Submail （50个字符以内）
set_reply() |回复地址，标准的回复邮件地址 e.g. leo@submail.cn
add_cc() | 抄送地址
add_bcc() | 密送地址
set_subject() | 邮件标题（200个字符以内）
set_text() | 纯文本邮件正文（5000个字符以内）
set_html() | HTML 邮件正文（60 KB以内）
add_var() | 使用文本变量动态控制邮件中的文本
add_link() | 使用超链接变量动态控制邮件中的超链接
add_attachment() | 附件（文件数量不超过10个，文件总大小应小于5 MB）
add_headers() | 自定义 EMAIL 头文件指令，headers 是一个标准的 JSON 字符串


```
//示例代码

var MailSend = require('../lib/mailSend.js');
var mailSend = new MailSend();

mailSend.add_to('leo@submail.cn');
mailSend.set_from('no-reply@insight.submail.cn');
mailSend.set_subject('submail通知');
mailSend.set_text('此处应填写您具体想要发送的内容，太短的内容以及包含测试字样的文字非常容易被拦截');
mailSend.send();


``` 

    mailXSend 类


方法/函数 | 参数说明
---|---
add_to() | 收件人地址
add_to_name() | 收件人姓名
add_addressbook() |添加地址簿中的联系人
set_from() | 发件人地址 ，标准的发件人地址 e.g. leo@submail.cn
set_from_name() | 发件人称呼，显示名称 e.g. Submail （50个字符以内）
set_reply() |回复地址，标准的回复邮件地址 e.g. leo@submail.cn
add_cc() | 抄送地址
add_bcc() | 密送地址
set_subject() | 邮件标题（200个字符以内）
set_project() | 纯文本邮件正文（5000个字符以内）
add_var() | 使用文本变量动态控制邮件中的文本
add_link() | 使用超链接变量动态控制邮件中的超链接
add_headers() | 自定义 EMAIL 头文件指令，headers 是一个标准的 JSON 字符串


```
//示例代码

var MailXSend = require('../lib/mailXSend.js');
var mailXSend = new MailXSend();

mailXSend.add_to('leo@submail.cn');
mailXSend.add_to_name('SUBMAIL');
mailXSend.set_from('no-reply@insight.submail.cn');
mailXSend.set_project('ZvNGo');
mailXSend.xsend();


``` 

     voiceCode 类


方法/函数 | 参数说明
---|---
set_to() | 11位国内手机号码，仅支持单个号码
set_code() |此数字为语音播报的4-10位数字验证码


```
//示例代码

var VoiceCode = require('../lib/voiceCode');
var voice = new VoiceCode();

voice.set_to('152********');
voice.set_code('1234');
voice.verify();


```

     voiceXsend 类


方法/函数 | 参数说明
---|---
set_to() | 11位国内手机号码，仅支持单个号码
set_project() |如何获取模板 ID 请参考 [SUBMAIL 开发文档](https://www.mysubmail.com/chs/documents/developer/MmSw12)
add_var() | 使用文本变量动态控制语音项目中的文本


```
//示例代码

var VoiceXSend = require('../lib/voiceXSend');
var voice = new VoiceXSend();

voice.set_to('152********');
voice.set_project('vLTXZ');
voice.add_var('code', '88888888');
voice.xsend();

```

     voiceSend 类


方法/函数 | 参数说明
---|---
set_to() | 11位国内手机号码，仅支持单个号码
add_content() | 语音正文，content 参数将会与您账户中的语音模板进行匹配


```
//示例代码

var VoiceSend = require('../lib/voiceSend');
var voice = new VoiceSend();

voice.set_to('152********');
voice.set_content('尊敬的用户，您的外卖即将送达，请保持电话通畅，谢谢');
voice.send();


```

     voiceMultiXsend 类


方法/函数 | 参数说明
---|---
add_multi() | 收件人 to 联系人参数和 vars 文本变量的整合模式
set_project() | 如何获取模板 ID 请参考 [SUBMAIL 开发文档](https://www.mysubmail.com/chs/documents/developer/MmSw12)


```
//示例代码

var VoiceMultiXsend = require('../lib/voiceMultiXsend');
var Multi = require('../lib/multiData');
var voice = new VoiceMultiXsend();

var data = ['15201893074','186********','133********'];
for(index in data) {
     var multi = new Multi();
     multi.set_to(data[index]);
     multi.add_var('name','name');
     voice.add_multi(multi);
}
voice.set_project('vLTXZ');
voice.multiXsend();


```

     intersmsXsend 类


方法/函数 | 参数说明
---|---
set_to() | 收件人手机号码，使用标准的 E164 格式，e.g. +1778889901
set_project() |如何获取模板 ID 请参考 [SUBMAIL 开发文档](https://www.mysubmail.com/chs/documents/developer/MmSw12)
add_var() | 使用文本变量动态控制短信项目中的文本


```
//示例代码

var IntersmsXSend = require('../lib/intersmsXSend');
var intersms = new IntersmsXSend();

intersms.set_to('+1778889901');
intersms.set_project('rBgTA4');
intersms.add_var('code', '888888');
intersms.xsend();

```

     intersmsSend 类


方法/函数 | 参数说明
---|---
set_to() | 收件人手机号码，使用标准的 E164 格式，e.g. +1778889901
add_content() | 短信正文，content 参数将会与您账户中的短信模板进行匹配


```
//示例代码

var IntersmsSend = require('../lib/intersmsSend');
var intersms = new IntersmsSend();

intersms.set_to('+1778889901');
intersms.set_content('【SUBMAIL】您的验证码是888888，十分钟内有效');
intersms.send();


```

     voiceMultiXsend 类


方法/函数 | 参数说明
---|---
add_multi() | 收件人 to 联系人参数和 vars 文本变量的整合模式
set_project() | 如何获取模板 ID 请参考 [SUBMAIL 开发文档](https://www.mysubmail.com/chs/documents/developer/MmSw12)


```
//示例代码

var IntersmsMultiXsend = require('../lib/intersmsMultiXsend');
var Multi = require('../lib/multiData');
var intersms = new IntersmsMultiXsend();

var data = ['+1778889901','+1778889901','+1778889901'];
for(index in data) {
     var multi = new Multi();
     multi.set_to(data[index]);
     multi.add_var('code','1234');
     intersms.add_multi(multi);
}
intersms.set_project('rBgTA4');
intersms.multiXsend();


```

     addressbookMessage 类


方法/函数 | 参数说明
---|---
set_address() | 11位手机号码
set_addressbook() | （可选）地址簿标识，将联系人添加/删除到目标地址簿,为空时添加/删除订阅地址簿


```
//订阅示例代码

var AddressbookMessage = require('../lib/addressbookMessage');
var addressbookMessage = new AddressbookMessage();

addressbookMessage.set_address('152********');
addressbookMessage.set_addressbook('Ku1qM3');
addressbookMessage.subscribe();


```
```
//退订示例代码

var AddressbookMessage = require('../lib/addressbookMessage');
var addressbookMessage = new AddressbookMessage();

addressbookMessage.set_address('152********');
addressbookMessage.set_addressbook('Ku1qM3');
addressbookMessage.unsubscribe();


```


     addressbookMail 类


方法/函数 | 参数说明
---|---
set_address() |	联系人邮件地址
set_address_name|联系人姓名
set_addressbook() | （可选）地址簿标识，将联系人添加/删除到目标地址簿,为空时添加/删除订阅地址簿


```
//订阅示例代码

var AddressbookMail = require('../lib/addressbookMail.js');
var addressbookMail = new AddressbookMail();

addressbookMail.set_address('leo@submail.cn');
addressbookMail.subscribe();


```
```
//退订示例代码

var AddressbookMail = require('../lib/addressbookMail.js');
var addressbookMail = new AddressbookMail();

addressbookMail.set_address('leo@submail.cn');
addressbookMail.unsubscribe();


```


> 请求结果
     
    成功：success
    失败：请参考 [SUBMAIL 开发文档接口错误代码](https://www.mysubmail.com/chs/documents/developer/c8ujr)