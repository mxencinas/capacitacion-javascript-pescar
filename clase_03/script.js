function cambiarTextoEjer1(){
    const titulo1 = document.getElementById("Titulo_Ejer1");

    titulo1.textContent =
      titulo1.textContent === "Hola Mundo" ? "Texto cambiado" : "Hola Mundo";
}

function cambiarBgEjer2() {
  const titulo1 = document.getElementById("Titulo_Ejer1");

  titulo1.classList.toggle("bg-violeta");
}

function alternarDisplayParrafoEjer3(){
    const parrafoEjer3 = document.getElementById("p_Ejer3");
    const btnEjer3 = document.getElementById("btn_Ejer3");

    if (btnEjer3.textContent === "Ocultar") {
      parrafoEjer3.style.display = "none";
      btnEjer3.textContent = "Mostrar";
    } else {
      parrafoEjer3.style.display = "block";
      btnEjer3.textContent = "Ocultar";
    }
}

function incrementarContadorEjer4(){
    const contador = document.getElementById("contador_Ejer4");
    contador.textContent = parseInt(contador.textContent) + 1;
}

function cambiarImagenEjer5(){
    const imagenEjer5 = document.getElementById("imagen_Ejer5");
    const url_base = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/"
    const imagen1 = "001.png"
    const imagen2 = "007.png"

    if (imagenEjer5.src === url_base + imagen1) {
      imagenEjer5.src = url_base + imagen2;
    } else {
      imagenEjer5.src = url_base + imagen1;
    }
}

function saludar_Ejer6(){
    const input_Ejer6 = document.getElementById("input_Ejer6");
    const output_Ejer6 = document.getElementById("output_Ejer6");

    if (!input_Ejer6.value){
        output_Ejer6.textContent = "Por favor, ingresa tu nombre.";
    } else {
        output_Ejer6.textContent = "¡Hola " + input_Ejer6.value + "!";
        input_Ejer6.value = "";
    }
}

function operar_Ejer7(operacion){
    const input1_Ejer7 = document.getElementById("input1_Ejer7");
    const input2_Ejer7 = document.getElementById("input2_Ejer7");
    const output_Ejer7 = document.getElementById("output_Ejer7");

    switch (operacion) {
        case "+":
            output_Ejer7.textContent = (parseFloat(input1_Ejer7.value) + parseFloat(input2_Ejer7.value));
            break;
        case "-":
            output_Ejer7.textContent = (parseFloat(input1_Ejer7.value) - parseFloat(input2_Ejer7.value));
            break;
        case "*":
            output_Ejer7.textContent = (parseFloat(input1_Ejer7.value) * parseFloat(input2_Ejer7.value));
            break;
        case "/":
            if (parseFloat(input2_Ejer7.value) === 0) {
                output_Ejer7.textContent = "Error: División por cero";
            } else {
                output_Ejer7.textContent = (parseFloat(input1_Ejer7.value) / parseFloat(input2_Ejer7.value));
            }
    }
}

function agregarTarea_Ejer8(){
    const input_Ejer8 = document.getElementById("input_Ejer8");

    if (!input_Ejer8.value.trim()) {
        input_Ejer8.value = "";
        return;
    }

    const listaTareas_Ejer8 = document.getElementById("ul_Ejer8");

    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = input_Ejer8.value;

    listaTareas_Ejer8.appendChild(nuevaTarea);
    input_Ejer8.value = "";
}
