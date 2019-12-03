let x = [0, 0], //this code is for the segment that makes the worm
  y = [0, 0],
  segLength = 50;

  let bugs = []; //This code is for the bugs on the screen


function setup() {
  createCanvas(1000, 1000);
  strokeWeight(20.0);
  stroke(255, 100);
  fill(50,145,0);
  for (let i = 0; i < 50; i++) {
    bugs.push(new Jitter());
  }
}


function draw() {
  background(0);
  dragSegment(0, mouseX, mouseY);
  dragSegment(1, x[0], y[0]);
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

function dragSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

class Jitter {    //this class makes the bugs jittery
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }

if(mouseIsPressed) {

  fill(random(0, 255), random(0, 255), random(0, 255)); //i tried to add fill is a random color when mouse is pressed this is very challenging

}

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
   ellipse(this.x, this.y, this.diameter, this.diameter);
 }
}
