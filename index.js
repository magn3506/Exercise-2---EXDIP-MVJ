
let oriA; // -180 -> 180
let oriB; // -180 -> 180
let oriG; // -90 -> 90


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);

}

function draw() {

  let r = map(oriA, -180, 180, 0, 255);
  let g = map(oriB, -180, 180, 0, 255);
  let b = map(oriG, -90, 90, 0, 255);


  let xPos = map(oriG, -90, 90, 0, windowWidth)
  let yPoz = map(oriB, -180, 180, 0, windowHeight)

  noStroke()
  fill(r,g,b)
  circle(xPos, yPoz, 10);

}

function handleOrientation(e) {
  console.log("handkeOrientation");

  oriA = Math.floor(e.alpha);
  oriB = Math.floor(e.beta);
  oriG = Math.floor(e.gamma);
}

function handleMotion(e) {
  console.log("handleMotion");
}
