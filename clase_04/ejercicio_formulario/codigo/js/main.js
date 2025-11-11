
// Contador para generar IDs únicos de robots
let contadorRobots = 1;

// Función para crear una card
function crearCard(robot) {
  const cardRobot = document.createElement("div");
  cardRobot.className = "card";
  cardRobot.id = `robot-${contadorRobots}`;

  cardRobot.innerHTML = `
    <img class="card-image" src="${robot.foto}" alt="${robot.nombre}">
    <div class="card-content">
      <h2 class="card-title">${robot.nombre}</h2>
      <div class="card-info">
        <span class="card-badge edad">${robot.edad} años</span>
        <span class="card-badge profesion">${robot.profesion}</span>
      </div>
      <p class="card-description">${robot.descripcion}</p>
      <button type="button" class="btn-eliminar" onclick="eliminarRobot(this)">
            Eliminar
      </button>
    </div>
  `;

  document.getElementById("cards-container").appendChild(cardRobot);
  contadorRobots++;

};

// Función para agregar un robot
function agregarRobot() { // TODO: Completar.
  // 1. Obtener los valores del formulario
  const nombreIngresado = document.getElementById("nombre");
  const edadIngresada = document.getElementById("edad");
  const profesionIngresada = document.getElementById("profesion");
  const descripcionIngresada = document.getElementById("descripcion");
  const fotoIngresada = document.getElementById("foto");
  // 2. Validar que los campos obligatorios no estén vacíos
  // Validado en el formulario con "required"

  if (!nombreIngresado.value || 
  !edadIngresada.value ||
  !profesionIngresada.value){
    console.log("Faltan campos por completar");
    return
  }

  // 3. Si no hay foto, generar una con RoboHash
  const urlImagen = fotoIngresada.value ? fotoIngresada.value : `https://robohash.org/${contadorRobots}.png`;
  // 4. Crear objeto robot

  const nuevoRobot = {
    nombre: nombreIngresado.value,
    edad: edadIngresada.value,
    profesion: profesionIngresada.value,
    descripcion: descripcionIngresada.value,
    foto: urlImagen,
  };
  
  // 5. Crear la card visualmente
  crearCard(nuevoRobot);

  // 7. Limpiar el formulario
  
  nombreIngresado.value = "";
  edadIngresada.value = "";
  profesionIngresada.value = "";
  descripcionIngresada.value = "";
  fotoIngresada.value = "";
  
};

// Código que permita agregar con Enter en los inputs (opcional).

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    agregarRobot();
  }
});

// Función para eliminar un robot
function eliminarRobot(boton) {
  boton.closest('.card').remove();
}