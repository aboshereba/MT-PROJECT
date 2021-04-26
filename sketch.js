
let img1,img2,img3,img4,img5;
let button;
let k=1;
function preload() {
  
  img1=loadImage('dogwakeup.jpg');
  img2=loadImage('dogeat.jpg');
  img3=loadImage('dogplay.jpg');
  img4=loadImage('dogwalk.jpg');
  img5=loadImage('dogsleep.jpg');
  
}

function setup() {
  createCanvas(440, 440);
  button = createButton('next');
 
  button.position(500, 400);
  button.mousePressed(next);
   button2 = createButton('back');
   button2.position(500, 300);
  button2.mousePressed(back);
  
}

function next() {
 
 if(k<=5) k++;
draw();
}
function back() {
 if(k>0)k--;
draw();
}

function draw() {
  background(0);
  if(k===1){
  image(img1,0,0);
  textSize(60);
    fill(255);
  text("Dog Wake Up",60,60);
  }
  if(k===2){
  
    image(img2,0,0);
     textSize(60);
    fill(255);
  text("Dog Eats",60,300);
  }
  if(k===3){
  image(img3,0,0);
    textSize(60);
    fill(255);
  text("Dog Plays",60,400);
  }
  if(k===4){
  image(img4,0,0);
textSize(60);
    fill(255);
  text("Dog At Park",60,400);
  }if(k===5){
  image(img5,0,0);
  textSize(60);
    fill(255);
  text("Dog Sleeps",60,400);
  }
  noLoop();
}