//Metodos tradicionales
let imageBtn = document.getElementById("image-btn");
console.log(imageBtn);

let containers = document.getElementsByClassName("container");
console.log(containers);

let arrayContainers = Array.from(containers); //Este convierte la lista en un array
console.log(arrayContainers);


//---------------------------------------------------------
//Metodos modernos

let imageBtnQuery = document.querySelector("#image-btn");
console.log(imageBtnQuery);

let containersQuery = document.querySelectorAll(".container");
console.log(containersQuery);

let arrayContainersQuery = [...containersQuery]; //Este también convierte la lista en un array
console.log(arrayContainersQuery);

//Manejo más avanzado
let titlesContainers = Array.from(document.querySelectorAll(".container h1"));
console.log(titlesContainers);

//-------------------------------------------------------------
//Creación y adición de elementos
let paragraph = document.createElement("p");
console.log(paragraph);

let paragraphText = document.createTextNode("Hola mundo");
console.log(paragraphText);

paragraph.appendChild(paragraphText); //Añade el nodo a el elemento padre

arrayContainersQuery[0].appendChild(paragraph); //Añade el nodo a el elemento padre

//-------------------------------------------------------------
//Modificación de texto en un elemento
titlesContainers[0].textContent = "Modificando el nodo";
titlesContainers[1].innerHTML = "Modificando el HTML";

//-------------------------------------------------------------
let specialContainer = document.querySelector("#special-container");
specialContainer.innerHTML = `
    <h1>Aquí se inserta HTML</h1>
    <p>innerHTML</p>
`; //Modifica el HTML que tenga adentro un elemento

let displayedImage = true;

const handleClick = () => {
    console.log("Esta tocandome");
    console.log(containers[0].children);
    if(displayedImage){
        containers[0].children[1].remove();
        displayedImage = false;
    } else {
        let newImage = document.createElement("img");
        newImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Stray_calico_cat_near_Sagami_River-01.jpg/640px-Stray_calico_cat_near_Sagami_River-01.jpg";
        newImage.alt = "gato";
        containers[0].insertBefore(newImage, containers[0].children[1]);
        displayedImage = true;
    }
}

imageBtn.addEventListener("click", () => handleClick()); //También podemos mandarlo a llamar con el nombre de la función sin parentesis