// const offset = 0;
// const limit = 10;

function convertPokemonToLi(pokemon){
    const types = pokemon.types.map(type => `<li class="type">${type.type.name}</li>`).join('');
  
    return `<li class="pokemon">
              <span class="number">#${pokemon.id}</span>
              <span class="name">${pokemon.name}</span>
  
              <div class="detail">
                <ol class="types">
                  ${types}
                </ol>
  
                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
              </div>
            </li>`;
}
  
const pokemonList = document.getElementById("PokemonList");
  
pokeApi.getPokemons(100) // obter 100 resultados da PokeAPI
  .then((pokemonsDetails) => {
    const pokemonLis = pokemonsDetails.map(convertPokemonToLi).join("");
    pokemonList.innerHTML = pokemonLis;
  }).catch((error) => console.log(error));
