let nombre = "Diego";
console.log(nombre);

nombre = "Angel";
console.log(nombre);

const pi = 3.14159;
console.log(pi);

let apellido = "Lechuga";
console.log(apellido);

apellido = "Villanueva";
console.log(apellido);

console.log("----------------------------");


console.log(3%2);
console.log(40%9);

console.log("----------------------------");


let numero = 0;

numero += 10;
console.log(numero);
numero -= 10;
console.log(numero);

let numero2 = 0;

numero2 = 10;
numero2 = "No es un número";

console.log(numero2);

let caracter = "H";

caracter+= "o";
caracter+= "l";
caracter+= "a";
console.log(caracter);

console.log("----------------------------");

console.log(`Igualdad`);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 === 5);

console.log(`Desigualdad`);
console.log(5 != "5");
console.log(5 !== 10);

console.log(`Comparación`);
console.log(5 > 2);
console.log(5 > 6);
console.log(5 < 6);
console.log(5 <= 5);
console.log(5 >= 10);

console.log("Operadores Logicos");
console.log(true && false);
console.log(5 > 2 && 7 < 10);
console.log(true || false);
console.log(5 < 2 || 7 < 10);
console.log(!true);
console.log(!5 < 2);

if(5 < 2){
    console.log("Esto es verdadero");
} else {
    console.log("Esto es falso");
}


let randomNumber = Math.random()*100;
randomNumber = Math.ceil(randomNumber);

if(randomNumber >= 95){
    console.log(`El numero aleatorio ${randomNumber} es mayor o igual a 95`);
} else {
    console.log(`El numero aleatorio ${randomNumber} es menor a 95`);
}


const puntajeCliente = 100;
let porcentaje = null;

if(puntajeCliente >= 3000){
    porcentaje = 50;
} else if(puntajeCliente >= 1500){
    porcentaje = 25;
} else if(puntajeCliente >= 500){
    porcentaje = 5;
} else {
    porcentaje = 0;
}

console.log(`El cliente tiene ${porcentaje}% de descuento`);


const edadUser = 10;
let edad = "";
if(edadUser>=18){
    edad="mayor de edad";
} else {
    edad="menor de edad";
}

console.log(`el usuario es ${edad}`);

let myVariable = 0;

console.log(myVariable);


if(myVariable){
    console.log(true);
} else {
    console.log(false);
}