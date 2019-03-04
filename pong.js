//Grid tracking Puck Location
//working on changing color of elipse at each updated location

// Scores
var leftScore = 0;
var rightScore = 0;

// The ball, or puck
var puck = {
  x: 300,
  y: 200,
  vx: 3,
  vy: -2,
  size: 20,
}

// Players
var leftY = 200;
var rightY = 200;
var playerWidth = 20;
var playerHeight = 60;
var playerSpeed = 5;

  var puckPositionX=  puck.x += puck.vx;
  var puckPositionY = puck.y += puck.vy;

function setup() {
  createCanvas(600, 400);
  frameRate(10);

}

function draw() {
  background(17, 30,30);
function mousePressed() {
  gray += 20;
}
  
  //Draw grids
  for (var y=20;y<=height - 20 ; y+=10){
  for (var x =20; x <=width - 20 ; x+=10){
   
    fill (250,250,250);
    line(x,y,puck.x,puck.y)
		stroke(255, 150, 220,20);
  }
}
  
  // Draw the board
push();
  strokeWeight(1)
  line(width/2, 0, width/2, height);
	pop();
  // Draw the puck
  push();
  
  
  fill(100, 83, 148,190);
  ellipse(puck.x, puck.y, puck.size, puck.size);
  
  pop();
  
  
  
  // Draw the players
   push();
  rectMode(CORNER);
  noStroke();
  rect(-1, leftY, playerWidth, playerHeight, 60);
  rect(width - playerWidth - 1, rightY, playerWidth, playerHeight, 60);
	pop();
  
  // Get user input
  if (keyIsDown(UP_ARROW)) {
    rightY -= playerSpeed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    rightY += playerSpeed;
  }
  if (keyIsDown(65)) { // 65 is "A"
    leftY -= playerSpeed;
  }
  if (keyIsDown(90)) { // 90 is "Z"
    leftY += playerSpeed;
  }
 
  
  // Ensure the paddle doesn't leave the screen
  if (leftY < 0) {
    leftY = 0;
  }
  if (leftY > height - playerHeight) {
    leftY = height - playerHeight;
  }
  if (rightY < 0) {
    rightY = 0;
  }
  if (rightY > height - playerHeight) {
    rightY = height - playerHeight;
  }

  // Update the puck position
  puck.x += puck.vx;
  puck.y += puck.vy;


  // Check if puck is off the top or bottom screen
  if (puck.y < 0 || puck.y > height) {
    puck.vy *= -1;
  }
  
  // Check if puck is hitting a paddle
  if (puck.x < playerWidth && puck.y > leftY && puck.y < leftY + playerHeight) {
    puck.vx *= -1;
  }
  if (puck.x > width - playerWidth && puck.y > rightY && puck.y < rightY + playerHeight) {
    puck.vx *= -1;
  }
  
  // Check if a player scored
  if (puck.x > width) {
    
    leftScore++
    puck.x = width/2;
    puck.y = height/2;
text("Left player scores a point!", 200, 200);
    noLoop;
  }
  if (puck.x < 0) {
   
    rightScore++
    puck.x = width/2;
    puck.y = height/2; 
    text("Right player scores a point!", 200, 200);
    noLoop;
  }
  //touchstart
  function touchStarted(event) {
  console.log(event);
}
  
}
