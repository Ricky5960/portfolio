const co = require('co');
const mailer = require('nodemailer');

const mail_config={
  "host": "xxxxxxx.co.jp", //SMTPホスト
  "port": "587", // ポート
  "auth": {
    "user": "xxxxxx", //ユーザー名
    "pass": "xxxxxx" // パスワード
  }
}

//SMTPの接続
var smtp_tmp = mailer.createTransport(mail_config);
// プロミス化
var smtp = require('bluebird').promisifyAll(smtp_tmp);

// メール内容の設定
var mail = {
  from: "xxxx@xxxx.co.jp", //送信元
  to: "t04.ty0425@gmail.con", // 送信先
  subject: "テストメール", //メールのタイトル
  text: "メール本文", //メール本文
};

co(function*(){
  try{
    var res = yield smtp.sendMailAsync(mail);
    console.log(res);
  }catch(e){
    console.log("Error");
    console.log(e);
  }
  smtp.close();
});
