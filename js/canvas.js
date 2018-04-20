/*jshint esversion: 6 */
 const canvasElem = document.getElementById('canvas');
 const ctx = canvasElem.getContext('2d');

var szer = canvasElem.width, wys = canvasElem.height;

// color wypełnienia
 ctx.fillStyle = "#e81fc8";
// rysujemy prostokąty/kwadraty
//x,y width, height
ctx.fillRect(25, 25, 100, 100);

//kolor obrazu
ctx.fillStroke = "#446085";
//drugi obraz prostokąta
ctx.strokeRect(30, 30, 100, 100);

//czyszczenia obszaru
ctx.clearRect(45, 45, 60, 60);

//rysowanie lini
ctx.fillStroke = "gray";
//ctx.moveTo(canvasElem.width / 2, canvasElem.height /2);
ctx.moveTo(0,0);
ctx.lineTo(szer, wys);
//ctx.stroke();
//ctx.moveTo(canvasElem.width / 2, canvasElem.height /2);
ctx.moveTo(0, wys);
ctx.lineTo(szer, 0);

ctx.stroke();

//rysowanie koła
ctx.beginPath();
//x, y, radius, miara łukowa
ctx.arc(szer / 2, wys / 2, 100, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(szer / 2, wys / 2, 90, 0,  Math.PI);
ctx.lineWidth = 5;
ctx.stroke();
ctx.beginPath();
ctx.arc(200, 100, 70, 0, 2 * Math.PI);
ctx.stroke();

//tekst
ctx.lineWidth = 1;
ctx.font = "normal 20px Arial";
ctx.textBaseline = "middle";
ctx.textAlign = "center";
ctx.strokeText('Grafika w canvas', 70, 180);
