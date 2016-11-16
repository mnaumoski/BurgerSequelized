// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var express = require('express')
var Burger   = require("../models")["Burger"]; // Pulls out the Character Model

// Routes
// =============================================================
module.exports = function(app){

  // Search for Specific Character (or all characters) then provides JSON
  app.get('/burgers', function(req, res){

     Burger.findAll({})
          .then(function(result){
            return res.json(result);
        })

  });

  // If a user sends data to add a new character...
  app.post('/api/new', function(req, res){

    // Take the request...
    var burger = req.body;

    // // Create a routeName
    // var routeName = burger.name.replace(/\s+/g, '').toLowerCase();

    // Then add burger to the database using sequelize
    Burger.create({
      // routeName: routeName,
      name: burger.name,
      burger_date: burger.date,
      devoured: burger.devoured

    });

  })
}