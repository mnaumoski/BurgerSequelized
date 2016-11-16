// We prepare our burger model
module.exports = function(sequelize, DataTypes){

  var Burger = sequelize.define('burgers', {
    // primary id
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // the name of the burger
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //date
    burger_date: {
       type: DataTypes.DATE
    }
    // devoured statuse of false
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
  })

  // return the Class, effectively exporting it
  return Burger;
}