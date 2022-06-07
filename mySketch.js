//Jogo adaptado e desenvolvido por Adriana Barbosa e Eva Miriam
// Versão base de Stephcraft
//https://stephcraft.itch.io/flappy-bird
 

var c;
var tartaruga;
var rocha;
var agua;
var ambiente;
var logotipo;

var som_pontos;
var som_saltar;
var som_bater;
var som_perder;
var som_voltar;

var fonte_tartaruga;

//EVENTOS
var mousePress = false;
var mousePressEvent = false;
var mouseReleaseEvent = false;
var keyPress = false;
var keyPressEvent = false;
var keyReleaseEvent = false;

var rochas = [];

var pontos = 0;
var hightscore = 0;
var velocidade = 3;
var gap = 80;

var gameover = false;
var pagina = "MENU";

var overflowX = 0;

var startgame = false;

var turtuga_eco = {
  
  x : 100,
  y : 0,
  
  target : 0,
  
  velocityY : 0,
  
  fly : false,
  
  angle : 0,
  
  falls : false,
  flashAnim : 0,
  flashReturn : false,
  kinematicAnim : 0,
  
  display : function() {
    
    if((!mousePress) || this.falls) {
      push();
        translate(this.x,this.y);
        rotate(radians(this.angle));
        image(tartaruga,0,0, tartaruga.width*1.5,tartaruga.height*3, 0,0 ,tartaruga.width/2,tartaruga.height*3);
      pop();
    }
    else {
      push();
        translate(this.x,this.y);
        rotate(radians(this.angle));
        image(tartaruga,0,0, tartaruga.width*1.5,tartaruga.height*3, tartaruga.width/2,0 ,tartaruga.width/2,tartaruga.height*3);
      pop();
    }
  },
  
  update : function() {
    if(this.falls) {
      if(this.flashAnim>255) {
        this.flashReturn = true;
      }
      
      if(this.flashReturn) {
        this.flashAnim -=60;
      }
      else {
        this.flashAnim +=60;
      }
      
      if(this.flashReturn && this.flashAnim === 0) {
        gameover = true;
        menu_gameover.easein();
        try { som_perder.play(); } catch(e) {}
        
        if(pontos > hightscore) { hightscore = pontos; }
      }
      
      this.y += this.velocityY;
      this.velocityY += 0.4;
      this.angle += 4;
      
      if(velocidade > 0) {
        velocidade = 0;
      }
      
      if(this.angle > 90) {
        this.angle = 90;
      }
    }
    else {
      this.y += this.velocityY;
      this.angle += 2.5;
    
      if(this.angle > 90) {
        this.angle = 90;
      }
    
      if(mousePressEvent || (keyPressEvent && key == ' ') ) {
        try { som_saltar.play(); } catch(e) {}
        
        this.velocityY = 0;
        this.fly = true;
        this.target = clamp(this.y - 60,-19,height);
        this.angle = -45;
      }
    
    
      if(this.y < this.target) {
        this.fly = false;
        this.target = 10000;
      }
    
    
      if(!this.fly) {
        this.velocityY+=0.4;
      }
      else {
        this.y -= 5;
      }
      
      if(this.y > height-49) {
        if(!turtuga_eco.falls) { try { som_bater.play(); } catch(e) {} }
        this.falls = true;
      }
    }
    this.y = clamp(this.y,-20,height-50);
  },
  
  kinematicMove : function() {
    if(gameover) {
      this.x = width/2;
      this.y = height/2;
      
      gameover = false;
      score = 0;
      gap = 90;
    }
    

    this.y = height/2 + map( sin(frameCount*0.1),0,1,-2,2 );
	/*
    if(this.kinematicAnim > 40) {
      this.kinematicAnim = 0;
    }
    
    this.kinematicAnim++;
    
    if(this.kinematicAnim>20) {
      this.y += 0.2;
    }
    else {
      this.y -= 0.2;
    }*/

    
    push();
      translate(this.x,this.y);
      image(tartaruga,0,0, tartaruga.width*1.5,tartaruga.height*3, 0,0 ,tartaruga.width/2,tartaruga.height*3);
    pop();
  }
}

//var font = new Font();

//var audio = new Audio('data/Assets/sound/som_pontos.wav');

function setup() {
  if(mobile()) {
    c = createCanvas(windowWidth,windowHeight);
  }
  else {
    c = createCanvas(800,450);
  }
  
  imageMode(CENTER);
  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER,CENTER);
  
  //disableScroll();
  
  noSmooth();
  
  rochas[0] = new Pipe();
  
  
  
  //IMAGENS
  tartaruga = loadImage('tartaruga.png');
  rocha = loadImage('rocha.png');
  agua = loadImage('agua.png');
  ambiente = loadImage('ambiente.png');
  logotipo = loadImage('logotipo.png');
  
  
  som_pontos = loadSound('som_pontos.wav');
  som_bater = loadSound('som_bater.wav');
  som_perder = loadSound('som_perder.wav');
  //som_saltar = loadSound('http://flappybird.netlify.com/data/Assets/sound/som_saltar.wav');
  som_saltar = loadSound('som_saltar.wav');
  som_voltar = loadSound('som_voltar.wav');
  
  
  fonte_tartaruga = loadFont('GROBOLD.ttf');
  
  turtuga_eco.y = height/2;
  
  try { textFont(fonte_tartaruga); } catch(e) {}
}

function ss(data) {
  console.log(data);
}

function draw() {
  background(121,198,195);
  
  switch(pagina) {
    case 'GAME':
      pagina_game();
      break;
    case 'MENU':
      pagina_menu();
      break;
  }
  
  //FRAMERATE
  //fill(0);
  //text(int(frameRate()),20,35);
  
  //EVENTO
  mousePressEvent = false;
  mouseReleaseEvent = false;
  keyPressEvent = false;
  keyReleaseEvent = false;
}

//EVENTO
function mousePressed() {
  mousePress = true;
  mousePressEvent = true;
}
function mouseReleased() {
  mousePress = false;
  mouseReleaseEvent = true;
}
function keyPressed() {
  keyPress = true;
  keyPressEvent = true;
}
function keyReleased() {
  keyPress = false;
  keyReleaseEvent = true;
}

//PAGINAS
function pagina_game() {
  
  overflowX += velocidade;
  if(overflowX > agua.width/2) {
    overflowX = 0;
  }
  
  //City
  image(agua, agua.width/2/2 ,height-agua.height/2/2-40,agua.width/2,agua.height/2);
  //image(agua, agua.width/2/2+agua.width/2-overflowX*0.01 ,height-agua.height/2/2-40,agua.width/2,agua.height/2);

  
  //creator
  if(!turtuga_eco.falls) {
    if(parseInt(frameCount)%70 === 0) {
      rochas.push(new Pipe());
    }
  }
  
  for(var i=0; i<rochas.length; i++) {
    if(rochas[i].x < -50) {
      rochas.splice(i,1);
    }
    
    try {
      rochas[i].display();
      rochas[i].update();
    } catch(e) {}
  }
  
  //AMBIENTE JOGO
  image(ambiente,ambiente.width-overflowX*2,height-ambiente.height ,ambiente.width*2,ambiente.height*2);
  image(ambiente,ambiente.width+ambiente.width*2-overflowX*2,height-ambiente.height ,ambiente.width*2,ambiente.height*2);
  
  
  turtuga_eco.display();
  turtuga_eco.update();
  turtuga_eco.x = smoothMove(turtuga_eco.x,90,0.02);
  
  //PONTUAÇÃO  
  if(!gameover) {
    push();
      textFont('GROBOLD');
      stroke(70,121,12);
      strokeWeight(5);
      fill(178,203,67);
      textSize(30);
      text(pontos,width/2,50);
    pop();
  }
  
  push();
    noStroke();
    fill(255,turtuga_eco.flashAnim);
    rect(width/2,height/2,width,height);
  pop();
  
  if(gameover) {
    menu_gameover.display();
    menu_gameover.update();
  }
}

function pagina_menu() {
  velocidade = 3;
  overflowX += velocidade;
  if(overflowX > agua.width/2) {
    overflowX = 0;
  }

  //AMBIENTE INICIAL
  image(ambiente,ambiente.width-overflowX*2,height-ambiente.height ,ambiente.width*2,ambiente.height*2);
  image(ambiente,ambiente.width+ambiente.width*2-overflowX*2,height-ambiente.height ,ambiente.width*2,ambiente.height*2);
  
  image(logotipo,width/2,100,logotipo.width/4,logotipo.height/4);
  
  turtuga_eco.kinematicMove();
  
  push();
    fill(230,97,29);
    stroke(255);
    strokeWeight(3);
    text('',width/2,height/2-50);
  pop();

  if(mousePressEvent || (keyPressEvent && key == ' ') ) {
  	pagina = "GAME";
    resetGame();
  	
  	turtuga_eco.velocityY = 0;
    turtuga_eco.fly = true;
    turtuga_eco.target = clamp(this.y - 60,-19,height);
    turtuga_eco.angle = -45;
    turtuga_eco.update();
  }
  turtuga_eco.x = width/2;
	
}

function Pipe() {
  
  this.gapSize = gap;
  this.y = random(150,height-150);
  this.x = width + 50;
  this.potential = true;
  
  this.display = function() {
    push();
      translate(this.x,this.y+this.gapSize+rocha.height/2/2);
      image(rocha, 0,0 ,rocha.width/2,rocha.height/2);
    pop();
    
    push();
      translate(this.x,this.y-this.gapSize-rocha.height/2/2);
      rotate(radians(180));
      scale(-1,1);
      image(rocha,0,0,rocha.width/2,rocha.height/2);
    pop();
    
    //Score
    if(this.potential && (turtuga_eco.x > this.x-25 && turtuga_eco.x < this.x+25)) {
      score++;
      try { som_pontos.play(); } catch(e) {}
      
      if(gap > 60) { gap--; }
      //if(velocidade < 20) { velocidade+=0.1; }
      
      this.potential = false;
    }
    
    //rochas collisions
    if( ( 
        (turtuga_eco.x+20 > this.x-25 && turtuga_eco.x-20 < this.x+25) && 
        (turtuga_eco.y+20 > (this.y-this.gapSize-rocha.height/2/2)-200 && turtuga_eco.y-20 < (this.y-this.gapSize-rocha.height/2/2)+200)
        )
        
        ||
        
        ( 
        (turtuga_eco.x+20 > this.x-25 && turtuga_eco.x-20 < this.x+25) && 
        (turtuga_eco.y+20 > (this.y+this.gapSize+rocha.height/2/2)-200 && turtuga_eco.y-20 < (this.y+this.gapSize+rocha.height/2/2)+200)
        )
        
        ) {
      
      if(!turtuga_eco.falls) { try { som_bater.play(); } catch(e) {} }
      turtuga_eco.falls = true;
    }
  }
  this.update = function() {
    this.x-= velocidade;
  }
}

//utility
function clamp(value,min,max) {
  
  if(value < min) {
    value = min;
  }
  if(value > max) {
    value = max;
  }
  
  return value;
}

function resetGame() {
  gameover = false;
  gap = 80;
  velocidadevelocidade = 3;
  score = 0;
  turtuga_eco.y = height/2
  turtuga_eco.falls = false;
  turtuga_eco.velocityY = 0;
  turtuga_eco.angle = 0;
  turtuga_eco.flashAnim = 0;
  turtuga_eco.flashReturn = false;
  rochas = [];
  turtuga_eco.target = 10000;
  menu_gameover.ease = 0;
}

//Menu Gameover
var menu_gameover = {
  
  ease : 0,
  easing : false,
  open : false,
  
  display : function() {    
    push();
      translate(width/2,height/2);
      scale(this.ease);
      
      stroke(70,121,12);
      strokeWeight(2);
      fill(178,203,67);
      square(0, -15, 200, 20);
      
      noStroke();
      textFont('GROBOLD');
      stroke(70,121,12);
      strokeWeight(3);
      fill(230);
      text('Ajuda a Turtuga',0,-50);
      text('a desviar-se do lixo!',0,-30);
      
      //Title
      textSize(20);
      textFont('GROBOLD');
      strokeWeight(5);
      stroke(70,121,12);
      fill(230);
      text('Turtuga Eco',0,-80);
      
    //Página de perder
      push();
        textFont('GROBOLD');
        textAlign(LEFT,CENTER);
        textSize(18);
        stroke(70,121,12);
        strokeWeight(3);
        fill(230);
        text('Pontos : ',-80,10);
        text('Recorde : ',-80,40);

        stroke(70,121,12);
        strokeWeight(3);
        fill(230);
        text(score,20,10);
        text(hightscore,20,40);
      pop();
      
      if(press('Recomeçar',0,140,width/2,height/2)) { 
        
        resetGame();
      }
      
      if(press('Menu',0,190,width/2,height/2)) { pagina = 'MENU'; }
    pop();
  },
  
  update : function() {
    if(this.easing) {
      this.ease += 0.1;
      if(this.ease > 1) {
        this.open = true;
        this.ease = 1;
        this.easing = false;
      }
    }
  },
  
  easein : function() {
    this.easing = true;
  }
}

function press(txt,x,y,tX,tY) {
  var this_h = false;
  
  if(mouseX > tX+x-textWidth(txt)/2-10 && mouseX < tX+x+textWidth(txt)/2+10 && mouseY > tY+y-textAscent()/2-10 && mouseY < tY+y+textAscent()/2+10) {
    this_h = true;
  }
  
  push();
    textSize(16);
    
    if(this_h && mousePress) {
      noStroke();
      fill(83,56,71);
      rect(x,y+3,textWidth(txt)+25+10,textAscent()+10+10);
      
      fill(250,117,49);
      stroke(255);
      strokeWeight(3);
      rect(x,y+2,textWidth(txt)+25,textAscent()+10);
    
      noStroke();
      fill(255);
      text(txt,x,y+2);
    }
    else {
    noStroke();
    fill(83,56,71);
    rect(x,y+2,textWidth(txt)+25+10,textAscent()+10+12);
    
    if(this_h) {
      fill(250,117,49);
    }
    else {
      fill(230,97,29);
    }
    stroke(255);
    strokeWeight(3);
    rect(x,y,textWidth(txt)+25,textAscent()+10);
    
    noStroke();
    fill(255);
    text(txt,x,y);
    }
  pop();
  
  if(this_h && mouseReleaseEvent) { try { som_voltar.play(); } catch(e) {} }
  
  return (this_h && mouseReleaseEvent);
}

function smoothMove(pos,target,velocidade) {
	return pos + (target-pos) * velocidade;
}

// js utility

/*
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}*/

function mobile() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}


