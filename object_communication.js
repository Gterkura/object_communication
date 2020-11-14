let b = [];
let a=[];


function setup() {
  createCanvas(1000, 800);
  // put setup code here
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    b[i] = new Bubble(x, y, random(10, 50));
  }
}


function draw() {
  background(75, 150, 180);
  for (let i = 0; i < b.length; i++) {

    for (let j = 0; j < b.length; j = j + 1) {

      if (b[i] !== b[j] && b[i].intersects(b[j])) {
        b[i].changeColor(random(50, 90));
        b[j].changeColor(random(255, 100));
      }
    }
    b[i].move();
    //b[i].changeShape();
    b[i].display();

    for (let r of a ) { 
      r.changeShape();
    }


    /*if (b[i].clicked(mouseX, mouseY)) {
     b[i].changeColor(150);
     }
     else {
     b[i].changeColor(0);
     }*/
  }
}

function mousePressed() {

  let w=new Paddles(random(width), random(height), random(5, 20), random(10, 50));

  a.push(w);
  for (let i = 0; i < b.length; i++) {
    if (b[i].clicked(mouseX, mouseY)) {
      //b[i].backToOrigin();
      b[i].moveFaster();
      b[i].changeShape();
    }
  }
}


class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = 255;
    this.speed = random(-1, 1);
  }

  changeColor(bright) {
    this.c = bright;
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);
  }
  clicked(px, py) {
    let d = dist(this.x, this.y, px, py);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }
  move() {
    this.x = this.x + this.speed;
    if (this.x > width || this.x < 0) {
      this.speed *= -1;
    }
    this.y = this.y + this.speed;
    if (this.y > height || this.y < 0) {
      this.speed *= -1;
    }
  }
  backToOrigin() {
    this.x= 0;
    this.y=0;
  }
  
  moveFaster(){
  
  this.speed*=10;}

  display() {
    fill(this.c);
    ellipse(this.x, this.y, this.r * 2);
  }
}

class Paddles {
  constructor(x, y, z, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.z = z;
    this.c = 0;
    this.speed = random(-1, 1);
  }

  changeColor(bright) {
    this.c = bright;
  }

  changeShape() {
    fill(this.c);
    rect(this.x, this.y, this.z, this.r);
  }

  /* intersects(other) {
   let d = dist(this.x, this.y, other.x, other.y);
   return (d < this.r + other.r);
   
   
   }
   clicked(px, py) {
   let d = dist(this.x, this.y, px, py);
   if (d < this.r) {
   return true;
   } else {
   return false;
   }
   }
   move() {
   this.x = this.x + this.speed;
   if (this.x > width || this.x < 0) {
   this.speed *= -1;
   }
   this.y = this.y + this.speed;
   if (this.y > height || this.y < 0) {
   this.speed *= -1;
   }
   
   
   }
   noMove(){
   this.x= 0;
   this.y=0;
   
   }*/
}
