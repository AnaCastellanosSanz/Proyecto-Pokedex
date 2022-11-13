import { getPokemon } from "./getpokemon";


// Creo una constante con el número de pokemon que quiero que se muestren 
const allPokemon = 100; 
var pokedex = {}; // se convierte en {1 : {"name" : "bulbasaur", "img" : url, "type" : ["grass", "poison"], "desc" : "...."} }

//Esta función se utiliza cuando la ventana se abre 
// Siempre que se llame a una función asincrona, la función debe ser también asíncrona 
window.onload = async function () {
    
    //Hago un bucle desde el 1 porque no hay un pokemon con el número 0
    for (let i = 1; i <= allPokemon; i++) {
        await getPokemon(i);
    

        //Creo el div donde van a aparecer todos los nombres de los pokemon (lado derecho)
        let pokemon = document.createElement("div");
        // Esto servirá cuando hagamos click sobre los nombres
        pokemon.id = i;
        //Nombre de cada pokemon
        pokemon.innerText = i.toString() + ". " + pokedex[i]["name"].toUpperCase();
        //Asigno una clase para luego darle estilos en el CSS
        pokemon.classList.add("pokemon-name");
        //Evento click que llama a la función updatePokemon para que muestre la info de cada pokemon
        pokemon.addEventListener("click", updatePokemon);
        //Añado a un div existente que tiene un ID, el div pokemon 
        document.getElementById("pokemon-list").append(pokemon);   
      
}
}

//Aqui es donde se encontraba la función getpokemon inicialmente


function updatePokemon(){
    //Para los datos de la imagen
    document.getElementById("pokemon-img").src = pokedex[this.id]["img"]

    //Borro los types anteriores
    let typesDiv = document.getElementById("pokemon-types");
    //Mientras que este div tenga contenido se va a borrar
    while (typesDiv.firstChild){
        typesDiv.firstChild.remove();
    }

    //Actualizo los datos los type
    let types = pokedex[this.id]["types"];
    for (let i = 0; i < types.length; i++) {
        let type = document.createElement("span");
        //  types[i]["type"]["name"] es la esctructura que hay en la API
        type.innerText = types[i]["type"]["name"].toUpperCase();
        type.classList.add("type-box");
        type.classList.add(types[i]["type"]["name"]); //Aqui añado el color dependiendo del tipo de pokemon 
        typesDiv.append(type);
    }

    // Para los datos de la descripción 
    document.getElementById("pokemon-description").innerText = pokedex[this.id]["desc"];
}

