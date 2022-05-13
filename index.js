window.addEventListener("deviceorientation", handleOrientation, false);

let oriA; // -180 -> 180
let oriB; // -180 -> 180
let oriG; // -90 -> 90

let randomColor = Math.floor(Math.random()*16777215).toString(16);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  let r = map(oriA, -180, 180, 0, 255);
  let g = map(oriB, -180, 180, 0, 255);
  let b = map(oriG, -90, 90, 0, 255);

  background(r, g, b);

  let xPos = map(oriG, -90, 90, 0, windowWidth)
  let yPoz = map(oriB, -180, 180, 0, windowHeight)

  noStroke()
  fill("#" + randomColor)
  circle(xPos, yPoz, 300);

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
