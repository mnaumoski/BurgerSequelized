// Dependencies
// =============================================================
var express   = require('express');
var bodyParser  = require('body-parser');
var app = express();
var PORT = process.env.PORT || 8080;

// add the burger model and sync it.
// Syncing the model will create a matching table in our MySQL db. 
var Burger = require("./models")
Burger.sync(); // creates a burgers table

// extract our sequelize connection from the models object, to avoid confusion
var sequelizeConnection = models.sequelize

sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')
.then(function(){
  return sequelizeConnection.sync({force:true})
})

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// static directory
app.use(express.static('app/public'));



// Routes
// =============================================================

require("./routes/api-routes.js")(app)
require("./routes/html-routes.js")(app)




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function(){
  console.log('App listening on PORT ' + PORT);
})

// app.use('/', routes);
// app.use('/update', routes);
// app.use('/create', routes);

console.log(module.exports)
