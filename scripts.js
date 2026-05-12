async function getPokemon() {
       
        const idRand = Math.floor(Math.random()*151)+1;

        const apiPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${idRand}`);
        
        const json = await apiPoke.json();
        const tipo = json.types[0].type.name;
        
        document.getElementById("resultado").innerHTML = `
            <h2>${json.name}</h2>
            <p>ID: ${json.id}</p>
            <p>Altura: ${json.height}</p>
            <p>Peso: ${json.weight}</p>
            <p>Tipo: ${tipo}</p>
            <p>Normal: ${json.name}
            <img src="${json.sprites.other["official-artwork"].front_default}" style = "width: 20%;height: 280px;">
            </p>
            <p>Shiny: ${json.name}
            <img src="${json.sprites.other["official-artwork"].front_shiny}" style="width:350px; height: 280px;">
            </p>
            `;  
        

   
}

getPokemon();