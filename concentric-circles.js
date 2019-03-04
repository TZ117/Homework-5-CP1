//concentric-circles.js    
function setup() {
  createCanvas(400, 400);
}
var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(250);
  for (var i = 30; i <= 390; i = i + 10) {
    ellipse(200, 200, 10+ (x.length -i),10+ (x.length -i));
  noFill(ellipse);
  }
}
