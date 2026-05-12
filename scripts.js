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
            <img src="${json.sprites.front_default}" style = "widht: 60%;height: 280px;">
            <img src="${json.sprites.front_shiny}" style="width:350px; height: 280px;">
        `;
        

   
}

getPokemon();