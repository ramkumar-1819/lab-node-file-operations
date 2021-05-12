const datas=require('./data');
const os=require('os');
const fs=require('fs');
const crypto = require('crypto');

const getos=os.userInfo();

fs.writeFileSync('message.txt','message.txt')
const userdatas=datas("Prograd",2021,"B.E");
const password = crypto.createHmac('sha256','a secret').update('Prograd').digest('hex');
fs.appendFileSync('message.txt',`\nPrograd Details   
    UserName ->${userdatas.name} 
    Year ->${userdatas.year}
    Qualification ->${userdatas.qualification}
    Username ->${getos.username}
    Password ->${password}`)

