/*
Ejercicio 3: forEach - Mostrar con Formato
Dado el array de nombres: ["Ana", "Juan", "María", "Pedro"]

Usa forEach para mostrar cada nombre con el formato: "Hola, [nombre]!"
*/
const nombres = ["Ana", "Juan", "María", "Pedro"];

//nombres.forEach(n => console.log(`Hola, ${n}!`))

/*
Ejercicio 4: map - Transformar Datos
Dado el array: const precios = [100, 200, 350, 80, 120];

Usa map para crear un nuevo array donde cada precio tenga un 15% de descuento.
*/
const precios = [100, 200, 350, 80, 120];
preciosConDescuento = precios.map(p => p * 0.85);

//console.log(preciosConDescuento);

/*
Ejercicio 5: map con Objetos
Dado el array de usuarios:
const usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 28 }
];

Usa map para crear un nuevo array que solo contenga los nombres en mayúsculas.
*/

const usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 28 }
];

const nombresMayusculas = usuarios.map(u => u.nombre.toUpperCase());

//console.log(nombresMayusculas);

/*
Ejercicio 6: filter - Filtrar Números
Dado el array: const numeros = [5, 12, 8, 21, 3, 18, 30, 7];

Usa filter para:

Obtener solo los números mayores a 10
Obtener solo los números pares
Obtener los números que son mayores a 10 Y pares
*/

const numeros = [5, 12, 8, 21, 3, 18, 30, 7];

const mayoresA10 = numeros.filter(n => n > 10);
const numerosPares = numeros.filter(n => n % 2 === 0);
const mayoresA10YPares = numeros.filter(n => n > 10 && n % 2 === 0);

// console.log("Números mayores a 10:", mayoresA10);
// console.log("Números pares:", numerosPares);
// console.log("Números mayores a 10 y pares:", mayoresA10YPares);

/*
Ejercicio 7: filter - Filtrar Productos
Dado el array de productos:

const productos = [
    { nombre: "Laptop", precio: 1000, categoria: "tech" },
    { nombre: "Camisa", precio: 50, categoria: "ropa" },
    { nombre: "Mouse", precio: 25, categoria: "tech" },
    { nombre: "Pantalón", precio: 80, categoria: "ropa" },
    { nombre: "Teclado", precio: 75, categoria: "tech" }
];
            
Usa filter para obtener:

Solo productos de tecnología
Productos que cuesten menos de $100
*/

const productos = [
    { nombre: "Laptop", precio: 1000, categoria: "tech" },
    { nombre: "Camisa", precio: 50, categoria: "ropa" },
    { nombre: "Mouse", precio: 25, categoria: "tech" },
    { nombre: "Pantalón", precio: 80, categoria: "ropa" },
    { nombre: "Teclado", precio: 75, categoria: "tech" }
];

const productosTech = productos.filter(p => p.categoria === "tech");
const productosBaratos = productos.filter(p => p.precio < 100);

// console.log("Productos de tecnología:", productosTech);
// console.log("Productos que cuestan menos de $100:", productosBaratos);

/*
Ejercicio 8: find - Encontrar Elemento
Dado el array de estudiantes:

const estudiantes = [
    { id: 1, nombre: "Ana", nota: 8 },
    { id: 2, nombre: "Juan", nota: 6 },
    { id: 3, nombre: "María", nota: 9 },
    { id: 4, nombre: "Pedro", nota: 7 }
];
            
Usa find para:

Encontrar el estudiante con id 3
Encontrar el primer estudiante con nota mayor a 8

*/
const estudiantes = [
    { id: 1, nombre: "Ana", nota: 8 },
    { id: 2, nombre: "Juan", nota: 6 },
    { id: 3, nombre: "María", nota: 9 },
    { id: 4, nombre: "Pedro", nota: 7 }
];
const estudianteId3 = estudiantes.find(e => e.id === 3);
const estudianteNotaMayor8 = estudiantes.find(e => e.nota > 8);

// console.log("Estudiante con ID 3:", estudianteId3);
// console.log("Primer estudiante con nota mayor a 8:", estudianteNotaMayor8);

/*
Ejercicio 9: reduce - Sumar y Promediar
Dado el array: const notas = [8, 7, 9, 6, 10, 7, 8];

Usa reduce para:

Calcular la suma de todas las notas
Calcular el promedio
*/

const notas = [8, 7, 9, 6, 10, 7, 8];

const sumaNotas = notas.reduce((acc,cur) => acc + cur, 0);
const promedioNotas = sumaNotas / notas.length;
const promedioNotasReduce = notas.reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);

// console.log("Suma de todas las notas:", sumaNotas);
// console.log("Promedio de las notas (método tradicional):", promedioNotas.toFixed(2));
// console.log("Promedio de las notas (usando reduce):", promedioNotasReduce.toFixed(2));

/*
Ejercicio 10: reduce - Encontrar Máximo/Mínimo
Dado el array: const numeros = [45, 12, 89, 23, 67, 34, 91, 5];

Usá reduce para encontrar:

El número máximo
El número mínimo
*/

const numeros2 = [45, 12, 89, 23, 67, 34, 91, 5];
const numeroMaximo = numeros2.reduce ((acc, cur) => (cur > acc ? cur : acc), numeros2[0]);
const numeroMinimo = numeros2.reduce ((acc, cur) => (cur < acc ? cur : acc), numeros2[0]);

// console.log("Número máximo:", numeroMaximo);
// console.log("Número mínimo:", numeroMinimo);

/*
Ejercicio 11: Encadenar Métodos
Dado el array:

const productos = [
    { nombre: "Laptop", precio: 1000, enStock: true },
    { nombre: "Mouse", precio: 25, enStock: false },
    { nombre: "Teclado", precio: 80, enStock: true },
    { nombre: "Monitor", precio: 300, enStock: true },
    { nombre: "Webcam", precio: 50, enStock: false }
];
            
Encadena métodos para:

Filtrar solo productos en stock
Obtener solo los precios
Calcular el total
*/
const productos2 = [
    { nombre: "Laptop", precio: 1000, enStock: true },
    { nombre: "Mouse", precio: 25, enStock: false },
    { nombre: "Teclado", precio: 80, enStock: true },
    { nombre: "Monitor", precio: 300, enStock: true },
    { nombre: "Webcam", precio: 50, enStock: false }
];

const totalProductosEnStock = productos2.filter(p => p.enStock)
                                        .map(p => p.precio)
                                        .reduce((acc, cur) => acc + cur, 0);

//console.log("Total de productos en stock:", totalProductosEnStock);

/*
Ejercicio 12: Crear y Manipular Objetos
Creá un objeto que represente un libro con las propiedades: título, autor, año, páginas.

Después:

Muestra el título y el autor
Agrega una nueva propiedad "genero"
Modifica el año
Elimina la propiedad páginas
*/

const libro = {
    titulo: "libro de ejemplo",
    autor: "Anonimo",
    anio: 2020,
    paginas: 300
};

//console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
libro.genero = "Ficción";
libro.anio = 2021;
delete libro.paginas;
//console.log(libro);

/*
Ejercicio 13: Métodos en Objetos
Creá un objeto "calculadora" con métodos para:

sumar(a, b)
restar(a, b)
multiplicar(a, b)
dividir(a, b)
Probá cada método.
*/

const calculadora = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => a / b
};
// console.log("Suma:", calculadora.sumar(5, 3));
// console.log("Resta:", calculadora.restar(5, 3));
// console.log("Multiplicación:", calculadora.multiplicar(5, 3));
// console.log("División:", calculadora.dividir(5, 3));

/*
Ejercicio 14: Object.keys, values, entries
Dado el objeto:

const estudiante = {
    nombre: "Ana",
    edad: 20,
    carrera: "Ingeniería",
    promedio: 8.5
};
            
Usa Object.keys, Object.values y Object.entries para:

Mostrar todas las propiedades
Mostrar todos los valores
Iterar y mostrar cada par clave-valor
*/

const estudiante = {
    nombre: "Ana",
    edad: 20,
    carrera: "Ingeniería",
    promedio: 8.5
};
// console.log("Propiedades:", Object.keys(estudiante));
// console.log("Valores:", Object.values(estudiante));
// console.log("Par clave-valor:");
// Object.entries(estudiante).forEach(([clave, valor]) => {
//      console.log(`  ${clave}: ${valor}`);
// });

/*
Ejercicio 15: Análisis de Estudiantes
Dado el array de estudiantes:

const estudiantes = [
    { nombre: "Ana", edad: 20, notas: [8, 9, 7, 8] },
    { nombre: "Juan", edad: 22, notas: [6, 7, 8, 7] },
    { nombre: "María", edad: 21, notas: [9, 10, 9, 10] },
    { nombre: "Pedro", edad: 19, notas: [5, 6, 5, 6] }
];
            
Calcula:

El promedio de notas de cada estudiante
Filtrá solo los que tienen promedio >= 7
Obtené solo los nombres de los aprobados
*/

const estudiantes2 = [
  { nombre: "Ana", edad: 20, notas: [8, 9, 7, 8] },
  { nombre: "Juan", edad: 22, notas: [6, 7, 8, 7] },
  { nombre: "María", edad: 21, notas: [9, 10, 9, 10] },
  { nombre: "Pedro", edad: 19, notas: [5, 6, 5, 6] },
];

const promediosNotas = estudiantes2.map((e) => ({
  ...e,
   promedio: e.notas.reduce((acc, cur, _, arr) => acc + cur / arr.length, 0),
}));

const estudiantesAprobados = promediosNotas.filter(e => e.promedio >= 7);
const nombresAprobados = estudiantesAprobados.map(e => e.nombre);

// console.log("Promedio de notas de cada estudiante:", promediosNotas);
// console.log("Estudiantes aprobados:", estudiantesAprobados);
// console.log("Estudiantes aprobados:", nombresAprobados);


/*
Ejercicio 16: Gestión de Inventario
Dado el inventario:

const inventario = [
    { id: 1, producto: "Laptop", precio: 1000, cantidad: 5 },
    { id: 2, producto: "Mouse", precio: 25, cantidad: 0 },
    { id: 3, producto: "Teclado", precio: 80, cantidad: 10 },
    { id: 4, producto: "Monitor", precio: 300, cantidad: 3 }
];
            
Calculá:

Valor total del inventario (precio × cantidad)
Productos sin stock
Producto más caro
*/

const inventario = [
  { id: 1, producto: "Laptop", precio: 1000, cantidad: 5 },
  { id: 2, producto: "Mouse", precio: 25, cantidad: 0 },
  { id: 3, producto: "Teclado", precio: 80, cantidad: 10 },
  { id: 4, producto: "Monitor", precio: 300, cantidad: 3 },
];

const valorTotalInventario = inventario.reduce((acc, cur) => acc + cur.precio * cur.cantidad, 0);
const productosSinStock = inventario.filter(p => p.cantidad === 0 );
const productoMasCaro = inventario.reduce((acc, cur) => (cur.precio > acc.precio ? cur : acc), inventario[0]);

console.log("Valor total del inventario:", valorTotalInventario);
console.log("Productos sin stock:", productosSinStock);
console.log("Producto más caro:", productoMasCaro);