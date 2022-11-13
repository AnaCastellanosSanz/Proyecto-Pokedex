// Obtengo la URL en función del número 
export async function getPokemon(num){
    //Estoy pasando 1, agregará uno a la url y luego recuperaré los datos 
     let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();

     let res = await fetch(url);
     let pokemon = await res.json();


     //console.log(pokemon) : Si inspecciono y reviso la consola, veo que res.json no es una función y esto se debe a que es una función asíncrona, necesito estos datos para continuar con el resto del código, por lo que declaro la variable en espera (await) y esto permite que espere hasta que finalice la función y luego continue con el resto del código.


     // Creo las variables teniendo en cuenta los nombres para asignar los valores dentro de la API, por ejemplo la imagen se encuentra dentro de sprites - font-default.
     let pokemonName = pokemon["name"];
     let pokemonType = pokemon["types"];
     let pokemonImg = pokemon["sprites"]["front_default"]


    // Si entro dentro de la API, en la parte de species, hay una URL, si la copio y pego, encontraré el apartado flavor_text_entries que es alli donde está toda la información de cada pokemon.
    // De esta manera llamo también al otro objeto (ahora tengo dos)
    res = await fetch(pokemon["species"]["url"]);
    let pokemonDesc = await res.json();

    

    //Elijo el texto 59, podría haber eligido cualquiera pero es el que está en español
    pokemonDesc = pokemonDesc["flavor_text_entries"][59]["flavor_text"]


    //Esto es lo que se le añade a la función pokedex que un inicio está vacía
    pokedex[num] = {"name" : pokemonName, "img" : pokemonImg, "types" : pokemonType, "desc" : pokemonDesc};

 
}
