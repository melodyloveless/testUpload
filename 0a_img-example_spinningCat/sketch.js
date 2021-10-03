////// growing spinning cat
///// original - do not edit

var img; // Declare variable

function preload() {
  img = loadImage("cat.png"); // Load the image; Initialized variable as an image

}

function setup() {
  createCanvas(600, 600);
  //img = loadImage("cat.png"); // Load the image; Initialized variable as an image
}

function draw() {
  background(255,0,0);
  imageMode(CENTER); //imageMode() redefines the way the image is drawn

  let speedMax = 500;
  let speed = frameCount%speedMax;
  let grow = map(speed, 0, speedMax-1, 0.1, 2);

  push();
  translate(width/2, height/2);
  rotate((frameCount/width) * PI * 2);
  scale(grow);
  image(img, 0, 0);
  pop();


}
