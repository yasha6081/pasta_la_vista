// Dependencies
const express = require("express");
const path = require("path");

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tablesList = []
// Routes

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/reserve.html"));
  });
  

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


app.post("/api/tablesList", function(req, res) {

    var newReservation = req.body;
  
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    tablesList.push(newReservation);
  
    res.json(newReservation);
  });
  
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
