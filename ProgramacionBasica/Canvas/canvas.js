var dibujo;
var canvas;
function inicio() {
  console.log('Inicia dibujo');

  /** Se obtiene el canvas */
  dibujo = document.getElementById('dibujo');
  canvas = dibujo.getContext('2d');

  dibujarGrilla(canvas);

  /** Dibujamos un cuadrado */
  canvas.strokeStyle = "#DDD";
  canvas.moveTo(0,0);
  canvas.lineTo(300,0);
  canvas.lineTo(300,300);
  canvas.lineTo(1,300);
  canvas.lineTo(1,1);
  canvas.strokeStyle = "#00FF00";
  canvas.stroke();

  /** Dibujando un circulo */
  canvas.beginPath();
  canvas.strokeStyle = "#00F";
  canvas.arc(150, 150, 100, (2 * Math.PI), false);
  canvas.closePath();
  canvas.stroke();

}

function dibujarGrilla(l) {

  var ancho = 300;
  var alto = 300;
  var linea;
  var anchoEntreLineas = 30;
  var limiteX = ancho / anchoEntreLineas;
  var limiteY = alto / anchoEntreLineas;

  l.strokeStyle = "#AA";

  for (var linea = 0; linea <= limiteX; linea++) {

    var punto = linea * anchoEntreLineas;

    l.beginPath();
    l.moveTo(punto , 0);
    l.lineTo(punto , alto);
    l.stroke();
    l.closePath();
  }

  for (var linea = 0; linea <= limiteY; linea++) {

    var punto = linea * anchoEntreLineas;

    l.beginPath();
    l.moveTo(linea * 0 , punto);
    l.lineTo(linea * alto , punto);
    l.stroke();
    l.closePath();
  }

}
