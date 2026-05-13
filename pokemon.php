<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina sobre pokemons</title>
</head>
<style>
div.pok {
    text-align: center;
    border: solid 5px black;
    border-radius: 20px;
    font-family:cursive;
}

</style>
<body style="background-color: beige;">
    <h1 style="text-align: center;font-size: 60px;">Pokemons</h1>

    <?php 
    
    echo "<div class='pok'>";
    
    $numal = rand(1,150);

    $api = "https://pokeapi.co/api/v2/pokemon/$numal";

    $prepararJson = file_get_contents($api);
    $json = json_decode($prepararJson,true);

    echo "Nombre: ".$json["name"]."<br>";
    echo "Id: ".$json["id"]."<br>";
     echo "Peso: ".$json["height"]."<br>";
     echo "Tipo: ".$json["types"][0]["type"]["name"]."<br>";
     echo $json["name"]." normal: ";
     $imagenNormal = $json["sprites"]["other"]["official-artwork"]["front_default"];
     echo "<img src='$imagenNormal'><br>";
     $imagenShiny = $json["sprites"]["other"]["official-artwork"]["front_shiny"];
    echo $json["name"]." shiny: ";
     echo "<img src='$imagenShiny' widht='10%'><br>";


    

    
    
    



    
    
    echo "</div>";
    ?>
</body>
</html>
