let time = 0;
let wave = [];
let slider;


function setup() {
 createCanvas(600, 400);
 slider = createSlider(1, 15, 1);
}

function draw() {
background(0);
translate(200,200);
let x = 0;
let y = 0;
for(i = 0; i < slider.value(); i++){
  n = (i * 2) + 1;
  let prevX = x;
  let prevY = y;
let radius = 65 * (4)/( n * PI);
stroke(255,100);
noFill();
//elipse(0,0,radius*2);
ellipse(prevX,prevY,radius*2);


 x += radius * cos(n * time);
y += radius * sin(n *time);


stroke(255,100);
noFill();
//elipse(x,y,10);
ellipse(x,y,10);
stroke(255);
line(prevX,prevY, x,y);

}
line(x, y, 100, wave[0]);
translate(100,0);
wave.unshift(y);
beginShape()
for(i = 0; i <= wave.length; i++){
  vertex(i, wave[i]);
}
endShape()


time+= -0.05;

if(wave.length > 350){
  wave.pop();
}
}