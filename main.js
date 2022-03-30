var song1="";
var song2="";

var LeftWristX="";
var LeftWristY="";

var RightWristX="";
var RightWristY="";

var LeftWristScore="";
var RightWristScore="";

function preload() {
    song1=loadSound("music1.mp3");
    song2=loadSound("music2.mp3");
}

function setup() {
    canvas=createCanvas(680,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded)
    poseNet.on("pose",gotposes)
}

function modelloaded() {
    console.log("PoseNet Is Inisialized")
}

function gotposes(results) {
    if(results.length>0) {
        console.log(results);
        LeftWristX=results[0].pose.leftWrist.x;
        LeftWristY=results[0].pose.leftWrist.y;
        RightWristX=results[0].pose.rightWrist.x;
        RightWristY=results[0].pose.rightWrist.y;
        LeftWristScore=results[0].pose.keypoints[9].score;
        RightWristScore=results[0].pose.keypoints[10].score;
    }
}

function draw() {
    image(video,0,0,680,450);
    Song1Status=song1.isPlaying();
    Song2Status=song2.isPlaying();
    fill("Yellow");
    stroke("red");
    if(RightWristScore>0.2) {
        circle(RightWristX,RightWristY,20);
        song2.stop();
        if(Song1Status==false) {
            song1.play();
            document.getElementById("song_name").innerHTML="Playing Harry Potter Theme Song"
        }
    }

    if(LeftWristScore>0.2) {
        circle(LeftWristX,LeftWristY,20);
        song1.stop();
        if(Song2Status==false) {
            song2.play();
            document.getElementById("song_name").innerHTML="Playing Peter Pan Theme Song"
        }
    }

}