status = "";
img = "";

function preload(){
img = loadImage("fruits.jpg");
}

function setup(){
canvas = createCanvas(640 , 420)
canvas.center();
objectDetector = ml5.objectDetector('cocossd' , modelLoaded)
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
console.log("model is Loaded")
status = true;
objectDetector.detect(img , gotResults);
}

function gotResults(){
if(error){
console.error(error);
}
else{
console.log(results);
}
}