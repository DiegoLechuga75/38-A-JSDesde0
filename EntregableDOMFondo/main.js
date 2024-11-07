const buttons = document.querySelectorAll("button"); //Capturamos todos los botones del HTML
let body = document.querySelector("body"); //Capturamos el body

const arrayButtons = Array.from(buttons); //Convertimos la NodeList de botones en un arreglo de botones

console.log(buttons);//Console.log de la NodeList
console.log(arrayButtons);//Console.log del arreglo de botones

for(let i = 0; i < arrayButtons.length; i++){ //Recorremos mi arreglo de botones de 0 a el número de elementos en mi arreglo (0 - 4)
    console.log(`Añadiendo un event listener al boton ${arrayButtons[i].textContent}`); //Hacemos un console.log de que se le añadio un event listener a cada boton
    arrayButtons[i].addEventListener("click", (event) => handleColor(event)); //Añadimos un event listener a cada boton
}

const handleColor = (event) => {
    const colorSeleccionado = event.target.id; //Guardamos en una variable el id del elemento al que le doy click
    body.style.backgroundColor = colorSeleccionado;//Cambiamos los estilos del body poniendole el color que incluye el id
    console.log(`El color cambió a ${event.target.textContent}`); //Hacemos un console.log de a que boton le damos click
}

/* rojo.addEventListener("click", (event) => handleColor(event));
amarillo.addEventListener("click", (event) => handleColor(event));
azul.addEventListener("click", (event) => handleColor(event));
verde.addEventListener("click", (event) => handleColor(event)); */