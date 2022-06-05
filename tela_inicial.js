MENU = 0
let img1;
let img2;

function preload() {
  img1 = loadImage('inicio.png');
  img2 = loadImage('inicio2.png');


}

function setup() {
  createCanvas(800, 450);
}

function draw() {
  print(mouseX, mouseY)
  image(img1, 0, 0);
  textFont('GROBOLD');
  stroke(70,121,12);
  strokeWeight(2);
  fill(178,203,67);
  rect(330, 255,135,35);
  fill(178,203,67);
  rect(330, 300, 135, 35);
  fill(178,203,67);
  rect(330, 345, 135, 35);
  fill(178,203,67);
  textSize(20)
  fill(255);
  text('Regras', 365, 280);
  text('Jogar', 369, 325)
  text('Créditos', 356,371);
  
   // JOGAR
    if (MENU == 2) {
     image(img2, 0, 0, 800, 450);
  
    
    
    if (mouseButton == CENTER) {
      MENU = 0
    }
  }
  
// REGRAS
  if (MENU == 1) {
    image(img2, 0, 0, 800, 450);
    
    fill(178,203,67)
    textSize(15)
    stroke(70,121,12);
    strokeWeight(4);
    text('Scroll do rato para voltar ao MENU', 530, 30)
    textSize(25)
    text('1. Salta os obstáculos e evita chocar contra eles.', 50, 150)
    text('2. Para saltares deves clicar na tecla "space" ou ', 50, 200)
    text('3. O objetivo é obter o maior resultado possível.', 50, 250)
    text('4. O jogo termina quando chocares contra o obstáculo.', 50, 300)

    if (mouseButton == CENTER) {
      MENU = 0
    }
  } 
  // CRÉDITOS
  if (MENU == 3) {
     image(img2, 0, 0, 800, 450);
    
    fill(178,203,67)
    textSize(15)
    stroke(70,121,12);
    strokeWeight(4);
    text('Scroll do rato para voltar ao MENU', 530, 30)
    textSize(25)
    text('Elementos do Grupo: Adriana Barbosa e Eva Miriam.', 50, 150)
    text('1. The Coding Train - Chrome Dinosaur Game.', 50, 200)
    text('2. The Coding Train - Speech Recognition', 50, 290)
    text('with p5.Speech.', 80, 240)
    text('3. Gustavo Moniz - Menu do jogo (p5js).', 50, 350)
    if (mouseButton == CENTER) {
      MENU = 0
    }
  }
}

function mouseClicked() {
  if (MENU == 0) {
    if (mouseX < 465 && mouseX > 330) {
      if (mouseY < 287 && mouseY > 253) {
        MENU = 1
      }
      if (mouseY < 332 && mouseY > 300) {
        MENU = 2
      }
      if (mouseY < 380 && mouseY > 345) {
        MENU = 3
      }
    }
  }
}
