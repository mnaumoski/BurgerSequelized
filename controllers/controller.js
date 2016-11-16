// Dependencies
// =============================================================
var express = require('express');
var app = express();

var models = require('../models');
var sequelizeConnection = models.sequelize;

// Routes
// =============================================================
module.exports = function(app){

  app.get("/", function(req, res){
    console.log("App get /");
    res.redirect('/burgers')
  })
  app.get('/burgers', function(req, res){
    console.log("/burgers")
     models.Burger.findAll({})
          .then(function(result){
            
            var burger = {burgers: result}
            
            res.render('index', burger)

            return res.json(burger);
        })

  });

  app.post('/burgers/create', function(req, res){
    console.log('/burgers/create - post route')

    // Take the request...
    var burger = req.body;
    // Then add burger to the database using sequelize
    models.Burger.create({

      burger_name: burger.burger_name,
      burger_date: burger.burger_date,
      devoured: burger.devoured

    });

  })
}