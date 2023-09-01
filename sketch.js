let circulos = []; // Arreglo para almacenar los círculos
let velocidad = 6; // Velocidad de movimiento de los círculos
let direccion = 1; // Dirección inicial (1 para derecha, -1 para izquierda)

function setup() {
  createCanvas(1000, 1000);
  ellipseMode(CENTER);
}

function draw() {
  background(220);

  // Dibuja y actualiza los círculos existentes
  for (let i = 0; i < circulos.length; i++) {
    let circulo = circulos[i];
    ellipse(circulo.x, circulo.y, 50, 50);
    circulo.x += velocidad * circulo.direccion;

    // Restringe el movimiento dentro de la pantalla
    if (circulo.x > width || circulo.x < 0) {
      circulo.direccion *= -1; // Cambia la dirección al llegar a los bordes
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
  direccion *= -1;
}
