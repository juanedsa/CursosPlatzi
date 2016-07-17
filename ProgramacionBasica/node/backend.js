console.log('Arrancando el Backend de node');

var express = require("express");
var parcero = require("body-parser");

var web = express();
web.use(parcero.urlencoded());
var servidor;

servidor = web.listen(8080, function() {
    console.log('Servidor Arrancado');
});

web.get("/", function (req, res) {
  res.sendfile("formulario.html");
});

web.post("/entrar", function (req, res) {
  if(req.body.usuario === 'admin' && req.body.clave === 'admin'){
    res.send("Entraste al formulario secreto");
  } else {
    res.send("Suerte, Fuera de aqui");
  }
});

/** Prueba de urls amigables */
web.get("/test", function (req, res){
  console.log(req.query);
  res.send("Servidor web");
});

web.get("/hola/mama-es-linda", function (req, res){
  res.send("<strong> hola mama </strong>");
});
