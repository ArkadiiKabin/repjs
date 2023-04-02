

let radius = 10
function setup() {
    let myCanvas = createCanvas(300, 300);
    myCanvas.parent("canvasPapa");
    radius+=5
    fill(random(0,255),random(0,255),random(0,255))
}
  
function draw() {
    
    circle(150,150,radius)
    
}


