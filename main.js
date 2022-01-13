var song1="";
var song2="";

function preload() {
    song1=loadSound("music1.mp3");
    song1=loadSound("music2.mp3");
}

function setup() {
    canvas=createCanvas(680,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,680,450);
}