(async () => {
  const { Sequelize, DataTypes, Op } = require("sequelize");

  // 建立连接
  const sequelize = new Sequelize("mysql_study", "root", "root", {
    host: "localhost",
    dialect: "mysql" /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */,
  });

  // 定义模型
  const Fruit = sequelize.define(
    "Fruit",
    {
      id: {
        //id类型  一组不会重复的id
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING(20), allowNull: false },
      price: { type: DataTypes.FLOAT, allowNull: false },
      stock: { type: DataTypes.INTEGER, defaultValue: 0 },
    }
    //第三个参数为表的配置,如:表名,
    /*   ,{
      timestamps:false
  } */
  );
  //同步数据库
  //   强制更新
  let ret = await Fruit.sync({ force: true });
  /* 将会执行查询表的sql语句,如果没有将会创建 */

  ret = await Fruit.create({
    name: "香蕉",
    price: 0.8,
  });

  //更新
  ret = await Fruit.update(
    {
      price: 4,
    },
    {
      where: {
        name: "香蕉",
      },
    }
  );

  //查询所有
  ret = await Fruit.findAll({
    where: {
      price: {
        //范围  op操作符
        [Op.lt]: 5,
        [Op.gt]: 2,
      },
    },
  });
  console.log(JSON.stringify(ret, null, 2));
})();
