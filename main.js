noseX = 0;
noseY= 0;

function preload() {
clown_nose= loadImage('https://pngimg.com/image/55059');
}
function setup() {
    canvas = createCanvas(900,325);
    canvas.parent('canvas');
    video = createCapture(VIDEO);
    video.size(900,325);
    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("poseNet is initialized")
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-41;
        noseY = results[0].pose.nose.y+-15;
    }
}
function draw() {
image(video, 0, 0, 300, 300);
fill(255, 0, 0);
stroke(255, 0, 0);
image(clown_nose, noseX, noseY, 30, 30);
}
function takeSnapshot()
{scrollBy
    save('funny image');
}