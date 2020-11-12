(async () => {
  const mysql = require("mysql2/promise");
  const conf = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "mysql_study",
  };
  const connetion = await mysql.createConnection(conf);
  console.log("连接成功");

  /* 创建表 */
  const CREATE_SQL = `CREATE TABLE IF NOT EXISTS test(
        id INT NOT NULL AUTO_INCREMENT,
        message VARCHAR(45) NULL,
        PRIMARY KEY (id)
    )`;
  let ret = await connetion.execute(CREATE_SQL);
  
  console.log(ret);

  const INSERT_SQL = `INSERT INTO test(message) VALUES(?)`;

  ret = await connetion.execute(INSERT_SQL, ["abc"]);
  console.log(ret);
  const SELECT_SQL = `SELECT * from test`;
  const [rows, fields] = await connetion.execute(SELECT_SQL);
  console.log(JSON.stringify(rows));
})();
