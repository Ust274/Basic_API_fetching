async function fetchPoke(){
    
    try{
        const pokeName = document.getElementById("PokeName").value.toLocaleLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

        if(!response.ok){
            throw new Error(" data not found");
        }

    const data = await response.json();
    const imgSprite = data.sprites.front_default;
    const fetchImg = document.getElementById("poke");

    fetchImg.src = imgSprite;
    fetchImg.style.display = "block";

    }
   catch(error){
    console.error(error);
   } 
}

