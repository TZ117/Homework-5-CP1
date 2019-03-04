function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250)
  noFill();
  rectMode(CENTER);
  for (var r = 15; r < 75; r = r + 15) {
    for (var x = 40; x <= 400; x = x + 80){
    rect(x, 200, r, r);
    }
  }
}
