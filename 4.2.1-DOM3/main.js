const formulario = document.querySelector("#formulario-sesion"); //Capturamos el formulario

const handleForm = (event) => {
    event.preventDefault(); //Evita que la página se recargue al subir un formulario
    const inputUsuario = document.querySelector("#formulario-sesion input"); //Capturamos el input del formulario
    console.log(inputUsuario.value); //Console.log del valor del input
}

formulario.addEventListener("submit", (event) => handleForm(event)); //Le añadimos un evento tipo submit al formulario