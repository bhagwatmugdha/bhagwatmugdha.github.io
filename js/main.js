let backgroundGif;

function preload() {
    backgroundGif = createImg("assets/MugdhaGithubIntro.gif");
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas-container');
    background(0);
}

function draw() {
//   image(backgroundGif, 0, 0);
  backgroundGif.size(3*windowWidth/4, 3*windowHeight/4);
  backgroundGif.position((windowWidth-backgroundGif.width)/2, (windowHeight-backgroundGif.height)/2);
}