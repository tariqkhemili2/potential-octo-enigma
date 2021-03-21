var canva;
var option1, option2, option3, option4;

function setup(){
  canvas = createCanvas(850,400);
}


function draw(){
  background("pink");
  textSize(80);
  text("quiz",350,100);
  textSize(20);
  text("question: what starts and ends with the letter 'E', but has only one letter?",100,200);
  textSize(20);
  option1 = text("1. everyone",100,250);
  option2 = text("2. envelope",100,280);
  option3 = text("3. estimate",100,310);
  option4 = text("4. example",100,340);

  if (mousePressed(option1)) {
    background("red");
  }
  if (mousePressed(option2)) {
    background("red");
  }
  if (mousePressed(option3)) {
    background("red");
  }
  if (mousePressed(option4)) {
    background("green");
  }
}
