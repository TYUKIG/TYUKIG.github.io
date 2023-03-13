function setup() {
  createCanvas(400, 400);
}

function draw() {
  background //blue background color
  background(25,189,217);
  
  //set skin color and draw face
  fill(370,310,690);
  
    //ear variables
  earX = width * 717 / 27
  earY = height * 711/10
  //concatenation uses the plus sign but doesn't, instead sticks values end-to-end
  beginShape();
  curveVertex(230, 152);
  curveVertex(230, 152);
  curveVertex(259,141);
  curveVertex(246,172);
  curveVertex(246,172);
  endShape();  
  
 beginShape();
  curveVertex(179, 152);
  curveVertex(179, 152);
  curveVertex(149, 141);
  curveVertex(149, 182);
  curveVertex(149, 182);
  endShape();
  
  ellipse(200,200,110,120);
  
    //nose
  fill(270,310,690);
  beginShape();
  curveVertex(190,212);
  curveVertex(190,212);
  curveVertex(195,221);
  curveVertex(205,221);
  curveVertex(210,212);
  curveVertex(210,212);
  endShape();
  //mouth
  // fill(0);
  noFill();
  // ellipse(200,230,10,10);
  // ellipse(200,200,70,70);
  arc(200,195,90,70, PI/2 - .5, PI/2 + .5);
  //eyes
  fill(255);
  ellipse(180, 180, 15,10);
  ellipse(220, 180, 15,10);
  // irises
  fill(0,0,255);
  ellipse(180, 180, 5,5);
  ellipse(220, 180, 5,5);
  //pupils
  fill(0);
  ellipse(180, 180, 2,2);
  ellipse(220, 180, 2,2);
  endShape();
  

  console.log(mouseX + ", " + mouseY);

}