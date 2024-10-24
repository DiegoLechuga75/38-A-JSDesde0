const numeros = [5,4,3,2,8,5,6];
const frutas = [
    "manzana",
    "pera",
    "uva",
    "platano",
    "mango",
    "fresa",
]

console.log(numeros);

console.log(numeros[4] + numeros[3]);

numeros[4] = 10;

console.log(numeros);

console.log(numeros.length); //length retorna el número de elementos

for(let i = 0; i < numeros.length; i++){
    //console.log(i);
    console.log(numeros[i]);
}

console.log(frutas);

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i].toUpperCase());
}

let miFrutaFavorita = frutas.indexOf("FreSA".toLowerCase());

console.log(miFrutaFavorita);

console.log(frutas[miFrutaFavorita]);

//Añaden elementos

numeros.push(-3); //Al final
frutas.unshift("pera"); //Al inicio

console.log(numeros);
console.log(frutas);

const pasatiempos = "videojuegos guitarra gym musica";

//Divide strings en arrays

const arregloPasatiempos = pasatiempos.split(" ");

//Extrae dependiendo de la posicion de inicio y la posicion final

const nuevosPasatiempos = arregloPasatiempos.slice(1,3);

console.log(nuevosPasatiempos);

//Elimina n elementos a partir de un indice de inicio

arregloPasatiempos.splice(1,2, "programar", "dormir");

console.log(arregloPasatiempos);

//Concatena arreglos

const newArregloPasatiempos = arregloPasatiempos.concat(nuevosPasatiempos);

console.log(newArregloPasatiempos);

