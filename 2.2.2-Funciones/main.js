console.table([
    "manzana",
    "pera",
    "uva",
    "platano",
    "mango",
    "fresa",
]);

function sumaDosNumeros(numero1, numero2){
    return numero1 + numero2;
}

sumaDosNumeros(5,3);

let resultado = sumaDosNumeros(5,3);

console.log(resultado);

function saludoPersonalizado(nombre){
    return `Holaaaa, ${nombre}`;
}

saludoPersonalizado("Diego");

let saludoParaDiego = saludoPersonalizado("Diego");

console.log(saludoParaDiego);

let saludosPersonalizados = [];

saludosPersonalizados.push(saludoPersonalizado("Diego"));
saludosPersonalizados.push(saludoPersonalizado("Ana"));
saludosPersonalizados.push(saludoPersonalizado("Lalo"));
saludosPersonalizados.push(saludoPersonalizado("Marian"));


console.log(saludosPersonalizados);

function sumaArreglo(arreglo){
    let resultado = 0;
    for(let i = 0; i < arreglo.length; i++){
        resultado += arreglo[i];
    }
    return resultado;
}

console.log(sumaArreglo([1,2,3,4]));

function buscaElemento(array, target){
    for(let i = 0; i < array.length; i++){
        if(target === array[i]){
            return i;
        }
    }
    return -1;
}

console.log(buscaElemento([1,2,3,4,5,6,7,8], 1));

let frutas = [
    "manzana",
    "pera",
    "uva",
    "platano",
    "mango",
    "fresa",
]

console.log(buscaElemento(frutas, "mango"));


