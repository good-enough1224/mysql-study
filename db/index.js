(async ()=>{
    const mysql = require('mysql2/promise')
    const conf = {
        host:'localhost',
        user:'root',
        password:'root',
        database:'mysql_study'
    }
    const connetion = await mysql.createConnection(conf)
    console.log('连接成功');

    const CREATE_SQL = `CREATE TABLE IF NOT EXISTS test(
        id INT NOT NULL AUTO_INCREMENT,
        message VARCHAR(45) NULL,
        PRIMARY KEY (id)
    )`
    let ret = await connetion.execute(CREATE_SQL)
    console.log('创建成功');

})()