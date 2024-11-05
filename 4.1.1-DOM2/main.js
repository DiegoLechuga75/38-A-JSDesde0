const container = document.querySelector(".container");//Elemento padre de h1, p, img
const changeShapeButton = document.querySelector("#change-shape-button");
const catImages = document.querySelectorAll(".random-image");//Podemos seleccionar varios elementos a la vez y se guardan en una NodeList(Parecido a un arreglo)

const catImagesArray = Array.from(catImages);//Convertimos la NodeList en un arreglo
for(let i = 0; i < catImagesArray.length; i++){
    console.log(catImagesArray[i].alt);
    catImagesArray[i].alt = `${catImagesArray[i].alt}-${i}`;//Modificamos el alt para que contenga un número, para identificar más facilmente las imagenes
}
console.log(catImagesArray);

const changeShape = () => {
    container.classList.replace("square", "circle");//Podemos modificar las clases
    const containerTitle = document.querySelector(".container h1"); //Podemos seleccionar elementos con QuerySelector
    containerTitle.textContent = "Esto ahora es un circulo";//Podemos modificar el texto
    const containerParagraph = container.children[1]; //Podemos seleccionar elementos a partir de un elemento padre
    containerParagraph.textContent = "Aprendí a usar DOM";
    const containerImg = document.querySelector(".container img");
    containerImg.src = "https://www.svgrepo.com/show/210658/is-identical-with.svg";//Podemos modificar atributos especificos de un elemento
}


changeShapeButton.addEventListener("click", () => changeShape());