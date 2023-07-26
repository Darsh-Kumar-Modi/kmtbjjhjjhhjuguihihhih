noseX=0;
noseY=0;
headX=0;
headY=0;
function preload(){
img=loadImage("https://i.postimg.cc/QxPBzT92/clownnose.png");
img1=loadImage("https://i.postimg.cc/CK5J65K8/2.jpg");
}

function setup(){
    canvas = createCanvas(200,250);
    canvas.position(300,550);
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose',gotPoses);
}

function take_snapshot(){
    save('.png');
}

function modalLoaded(){
    console.log('int');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-20;
        headX = results[0].pose.nose.x-30;
        headY = results[0].pose.nose.y-150;
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(img1,headX,headY,100,100);
    image(img,noseX,noseY,30,30);
    }