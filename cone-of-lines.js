//concentric-circles.js    
function setup() {
  createCanvas(400, 400);
}
var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(250);
  for (var i = 20; i < width-20; i = i + 10) { 
   line(i, height,200,0);
  }
}
