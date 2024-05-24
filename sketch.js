let images = [];
let numberOfImages = 26;
let imageWidth, imageHeight;
let currentImageIndex = 0;
let lastImageChangeTime = 0;

// Collaborative aspect(before: 60, after: 100);
let imageChangeInterval = 100; 
let daysPassed = 0;

// Collaborative aspect
let selectText = '';
let selection;

let daysMapping = [
  14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15
];

function preload() {
  for (let i = 1; i <= numberOfImages; i++) {
    images.push(loadImage('images/h' + i + '.jpg'));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageWidth = images[0].width;
  imageHeight = images[0].height;
  background(0);

  // Collaborative aspect
  selection = createSelect();
  selection.position(width/2 + 210, 60);
  selection.option('☀️');
  selection.option('🌑');
  selection.option('🌓');
  selection.option('☁️');
  selection.changed(changeText);

}

function draw() {
  background(0);
  
  if (frameCount - lastImageChangeTime >= imageChangeInterval) {

    currentImageIndex = (currentImageIndex + 1) % numberOfImages;
    lastImageChangeTime = frameCount;

    daysPassed += daysMapping[currentImageIndex];

    if (currentImageIndex === 0) {
      daysPassed = 1;
    }
  }

  let x = width / 2 - imageWidth / 2;
  let y = height / 2 - imageHeight / 2;
  image(images[currentImageIndex], x, y);


  fill(255);
  textAlign(CENTER, TOP);
  textSize (35);
  text("" + daysPassed, width / 2, 20);

   // Collaborative aspect
   textAlign(CENTER, TOP);
   textSize(150);
   noStroke();
   text(selectText, width/2, height/2.5);

   fill(0)
   textSize(20);
   text('select an emoji that matches the background', width/2, 60);

}

// Collaborative aspect
function changeText() {
  selectText = selection.value();
}

