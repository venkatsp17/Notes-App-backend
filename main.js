const express = require('express');  
const mongose = require('mongoose');
const routes = require('./routers/routes');
// const bodyParser = require("body-parser");
var app = express(); 
app.use(express.json())

app.use('/',routes);

mongose.connect('mongodb://localhost:27017/notes')
  .then(() => console.log('Database Connected!✅'))
  .then(() => {app.listen(8000, function () {console.log("Server started!!")});}  );



