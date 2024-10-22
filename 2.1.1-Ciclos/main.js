for(let i = 0; i < 5; i++){
    console.log(i);
}

console.log("El ciclo terminó");


let limite = 100;

for(let i = 0; i <= limite; i++){
    if(i % 2 === 0){
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
}

let mensaje = "Hola mundo";
let mensajeInvertido = "";

for(let i = mensaje.length - 1; i >= 0; i--){
    mensajeInvertido += mensaje.charAt(i);
}

console.log(mensaje);
console.log(mensajeInvertido);

let index = 0;

while(index <= 10){
    console.log(index);
    index++;
}

let numeroAleatorio = Math.floor(Math.random()*100);

while(numeroAleatorio !== 50){
    console.log(numeroAleatorio);
    numeroAleatorio = Math.floor(Math.random()*100);
}

let numeroAleatorio2 = 50;

do{
    console.log(numeroAleatorio2);
    numeroAleatorio2 = Math.floor(Math.random()*3);
}while(numeroAleatorio2 !== 2)

console.log(numeroAleatorio2);

let numeroAleatorio3 = Math.floor(Math.random()*100);

for(let i = 0; i < 2; i++){
    console.log(numeroAleatorio3);
    numeroAleatorio3 = Math.floor(Math.random()*100);
}



/* let pin = 2424;

let numero = prompt("Escribeme un número");

console.log(numero);

let numero2 = prompt("Dame otro número");

console.log(numero2);
 */

let contraseñaCorrecta = "tacosalpastor4"; 
let contraseñaIngresada = ""; 
let intentos = 5;
while (contraseñaIngresada !== contraseñaCorrecta && intentos > 0) {
    contraseñaIngresada = prompt("Ingrese la contraseña:");
    if (contraseñaIngresada !== contraseñaCorrecta) {
        alert("Contraseña incorrecta. Intente nuevamente.");
        intentos--;
    } else {
        alert("¡Contraseña correcta!");
    }
}

if(intentos === 0){
    alert("Se acabaron los intentos");
}