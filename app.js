const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Redireccion basica, ya que esta aplicacion no posee una GUI real
// Solo existe para ser consumida por el frontend

app.get("/", (req, res) => {
  res.redirect('https://josedaxyz-frontend.herokuapp.com/');
});



app.use(cors())

// Rutas para las requests
// require("./routes/product.routes.js")(app);
require("./routes/backend.routes.js")(app); 


// Configurar puertos, recibido desde una variable de entorno proporcionada por Heroku
// app.listen(5000, () => {
app.listen( process.env.PORT || 5000, () => {

  console.log(`Server is running on port ${process.env.PORT}.`);
});