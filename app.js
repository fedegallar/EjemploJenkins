var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Ejemplo de prueba de Jenkins');
});

app.listen(3000, function () {
  console.log('Ejemplo de prueba de Jenkins!. http://localhost:3000');
});