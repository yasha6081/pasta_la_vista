// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
// var tablesList = [
//   {
//     routeName: "yoda",
//     name: "Yoda",
//     role: "Jedi Master",
//     age: 900,
//     forcePoints: 2000
//   },
//   {
//     routeName: "darthmaul",
//     name: "Darth Maul",
//     role: "Sith Lord",
//     age: 200,
//     forcePoints: 1200
//   },
//   {
//     routeName: "obiwankenobi",
//     name: "Obi Wan Kenobi",
//     role: "Jedi Master",
//     age: 55,
//     forcePoints: 1350
//   }
// ];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/reserve.html"));
  });
  

// Displays all characters
app.get("/api/tablesList", function(req, res) {
  return res.json(reserve);
});

// Displays a single character, or returns false
// app.get("/api/tablesList/:reserve", function(req, res) {
//   var chosen = req.params.reserve;

//   console.log(chosen);

//   for (var i = 0; i < tablesList.length; i++) {
//     if (chosen === tablesList[i].routeName) {
//       return res.json(tablesList[i]);
//     }
//   }

//   return res.json(false);
// });

// Create New Characters - takes in JSON input
app.post("/api/tablesList", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    tablesList.push(newReservation);
  
    res.json(newReservation);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
