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
    text('Scroll do rato para retroceder', 560, 430)
    textSize(20)
    text('1. Controlar o movimento da tartaruga com o botao esquerdo do rato,', 40, 190)
    text('desviando a tartaruga o mais longe possível longe das rochas.', 40, 220)
    text('2. A cada conjunto de rochas que a tartaruga ultrapassa, o jogador', 40, 260)
    text('ganha 1 ponto.', 40, 290)

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
    text('Scroll do rato para retroceder', 560, 430)
    textSize(20)
    text('Elementos do grupo: Adriana Barbosa e Eva miriam', 40, 180)
    text('Unidade Curricular: Design Multimédia', 40, 220)
    text('Docentes: André Rocha e José Manuel Soares', 40, 260)
    text('2.º ano Licenciatura Produçao Multimédia em Educaçao', 40, 300)
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