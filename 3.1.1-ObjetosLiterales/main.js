const persona = {
    nombre: "Diego",
    apellido: "Lechuga",
    edad: 2024 - 2003,
    esMayorDeEdad: true,
    pasatiempos: ["videojuegos", "guitarra", "gym"],
    mascota: {
        nombre: "Mantequilla",
        especie: "Gato",
    },

    saludo: function () {
        return `Hola me llamo ${this.nombre} ${this.apellido}`
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.saludo());



console.log(persona["apellido"]);

console.log(persona.mascota.nombre);
console.log(persona.pasatiempos[0]);

persona.ocupacion = "Sensei"; //Se considera mala practica cambiar la estructura de un objeto una vez ya declarado

console.log(persona.ocupacion);

const { nombre, apellido, edad, esMayorDeEdad } = persona; //Esto solo aplica para un objeto por archivo

console.log(esMayorDeEdad);

const artistas = [
    {
        nombre: "Arctic Monkeys",
        albums: ["The Car", "FWN", "AM"],
        genero: "Indie rock",
    },
    {
        nombre: "The Strokes",
        albums: ["The New Abnormal", "Angles", "Comedown Machine"],
        genero: "Indie rock",
    },
    {
        nombre: "Mac DeMarco",
        albums: ["Salad Days"],
        genero: "Indie",
    },
]

for(let i = 0; i < artistas.length; i++){
    console.log(`Albums de: ${artistas[i].nombre}`);
    let albumsArtista = artistas[i].albums;
    for(let j = 0; j < albumsArtista.length; j++){
        console.log(albumsArtista[j]);
    }
}

const jsonArtista = JSON.stringify(artistas[0]);

console.log(jsonArtista);

const artistaConvertido = JSON.parse(jsonArtista);

console.log(artistaConvertido);

const imprimirAlbumes = function (artista) {
    for (let i = 0; i < artista.albums.length; i++) {
        console.log(artista.albums[i]);
    }
}

imprimirAlbumes(artistas[1]);

for (let i = 0; i < artistas.length; i++) {
    console.log(`Albums de: ${artistas[i].nombre}`);
    imprimirAlbumes(artistas[i]);
}

const enviarSaludo = () => "Holaaa";
const suma = (a, b) => a + b;

console.log(enviarSaludo());

console.log(suma(5,4));
