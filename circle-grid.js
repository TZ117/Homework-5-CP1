//nested loops
function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0);
  for(var y=20; y<=height-20 ; y+=20){
    for (var x =20; x<= width-20; x +=20){
      fill (255, 225);
      ellipse(x,y,15,15);
    }
  }
}
