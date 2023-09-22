
let circulos = [];
let velocidad = 2;
let direccion = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220,100, 150);

  // Agregar el texto "Haz clic" en el fondo
  textSize(32);
  fill(0);
  textAlign(CENTER, CENTER);
  text("HAZ CLICK", width / 2, height / 2);

  // Dibuja y actualiza los círculos existentes
  for (let i = 0; i < circulos.length; i++) {
    let circulo = circulos[i];
    ellipse(circulo.x, circulo.y, 60, 50);
    circulo.x += velocidad * circulo.direccion;

    // Restringe el movimiento dentro de la pantalla
    if (circulo.x > width || circulo.x < 3) {
      circulo.direccion *= -3; // Cambia la dirección al llegar a los bordes
    }
  }
}

function mouseClicked() {
  // Crea un nuevo círculo en una posición aleatoria
  let nuevoCirculo = {
    x: random(width),
    y: random(height),
    direccion: direccion, // Utiliza la dirección actual
  };
  circulos.push(nuevoCirculo);

  // Cambia la dirección global para los próximos círculos
  direccion *= 1;
}
