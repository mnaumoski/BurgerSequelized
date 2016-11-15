// We prepare our burger model just like every other
module.exports = function(sequelize, DataTypes){
  // now, we create a model to represent our employees table
  var Burger = sequelize.define('burgers', {
    // primary id
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // the name of the burger
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //date
    date: {
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