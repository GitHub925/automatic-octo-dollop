function setup(){
    video = createCapture(VIDEO);
    video.size(480, 380)
    video.position(30)
    canvas=createCanvas(480, 360);
    canvas.position(580, 205);
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("oorgamoolga")

}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
    }
    else{
        alert("Don't worry! Ira Wheera's code is only seeing a teensy weensy error. Try again in a few minutes!")
    }
}
