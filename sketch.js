var hr, min, sec;
var hrAngle, minAngle, secAngle; 

function setup(){
    createCanvas(400,400); 
    //To use angle in Degrees
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    //Translation and rotation 
    translate(200,200)
    rotate(-90)

    //Calculating time using predefined func from p5.js
    hr = hour();
    min = minute();
    sec = second();

    //To create ab iterative rotation
    secAngle = map(sec, 0, 60, 0, 360);
    minAngle = map(min,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

    //drawing seconds hand
    push();
    rotate(secAngle); //rotate the hand based on angle calculated
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop()

    //drawing mins hand
    push();
    rotate(minAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    //drawing hr hand
    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    //drawing the arcs
    strokeWeight(10);
    noFill();

    //Seconds
    stroke(255,0,0);
    arc(0,0,300,300,0,secAngle);

    //Minutes
    stroke(0,255,0);
    arc(0,0,280,280,0,minAngle);
    
    //Hour
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);
}